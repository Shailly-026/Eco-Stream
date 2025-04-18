'use client';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { IconArrowDown, IconArrowDownBar, IconArrowUp, IconArrowUpBar, IconMicrophoneOff, IconPlayerRecordFilled, IconX } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { FaMicrophone } from "react-icons/fa6";
import { AnimatePresence, motion } from 'framer-motion';
import About from '@/app/(main)/about/page';

const InfoModal = ({ icon, title, description, showModal, setShowModal, centered = false, duration = 2000 }) => {

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, duration);
      return () => clearTimeout(timer);                       
    }
  }, [showModal, duration]);

  return <AnimatePresence>
    {showModal && (
      <motion.div
        className={` ${centered ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'top-10 left-10'} flex flex-col items-center gap-3 column fixed z-30 bg-slate-600 opacity-25 text-white text-center p-10 rounded-xl`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p>{icon}</p>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p>{description}</p>
      </motion.div>
    )}
  </AnimatePresence>
}

const InstructionModal = ({ setShowModal }) => {
  return <AnimatePresence>
    <motion.div
      className={`top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed z-30 bg-white text-slate-800 p-10 rounded-xl`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* close button */}
      <button onClick={() => setShowModal(false)} className='absolute top-10 right-10 text-xl'>
        <IconX size={20} />
      </button>
      <h3 className='text-center text-3xl font-bold mb-4'>Basic Instructions</h3>
      <p className='text-lg mb-2'>{`1. Say "Open <page name> page" to open navigate to any page`}</p>
      <p className='text-lg mb-2'>{`2. Say "I want to create user account" to navigate to the user signup page`}</p>
      <p className='text-lg mb-2'>{`2. Say "I want to create artist account" to navigate to the artist signup page`}</p>
      <p className='text-lg mb-2'>{`3. Say "I want to login as a user" to navigate to the user login page`}</p>
      <p className='text-lg mb-2'>{`3. Say "I want to login as a artist" to navigate to the artist login page`}</p>
      <p className='text-lg mb-2'>{`4. Say "Move down" to scroll down and vice-versa`}</p>
      <p className='text-lg mb-2'>{`5. Say "Move to bottom" to scroll to bottom of page and vice-versa`}</p>
    </motion.div>
  </AnimatePresence>
}

const pageDetails = [
  {
    pageName: 'home',
    pagePath: '/'
  },
  {
    pageName: 'user sign up',
    pagePath: '/user-signup'
  },
  {
    pageName: 'artist signup',
    pagePath: '/artist-signup'
  },
  {
    pageName: 'artist login',
    pagePath: '/artist-login'
  },
  {
    pageName: 'login',
    pagePath: '/user-login'
  },
  {
    pageName: 'contact',
    pagePath: '/contact'
  },
  {
    pageName: 'about',
    pagePath: '/about'
  },
  {
    pageName: 'resetPassword',
    pagePath: '/user-login/resetPassword'
  },
  {
    pageName: 'browse podcast',
    pagePath: '/browse-podcast'
  },
  {
    pageName: 'podcast details',
    pagePath: '/podcast-detail'
  },
  {
    pageName: 'podcast player',
    pagePath: '/podcast-player'
  },
  {
    pageName: 'add podcast',
    pagePath: '/artist/add-podcast'
  },
  {
    pageName: 'playlist',
    pagePath: '/user/playlist'
  },
  {
    pageName: 'artist profile',
    pagePath: '/artist/profile'
  },
  {
    pageName: 'user profile',
    pagePath: '/user/profile'
  },
  {
    pageName: 'browse all',
    pagePath: '/browse-all'
  },
  {
    pageName: 'signout',
    pagePath: '/user/Settings-Bar'
  },
  {
    pageName: 'user profile',
    pagePath: '/user/profile'
  },
  {
    pageName: 'artist profile',
    pagePath: '/artist/profile'
  },
]

const speech = new SpeechSynthesisUtterance();
const VoiceContext = createContext();

export const VoiceProvider = ({ children }) => {

  const [showModal, setShowModal] = useState(false);
  const [showInstruction, setShowInstruction] = useState(false);

  const [modalOptions, setModalOptions] = useState({
    icon: <FaMicrophone size={50} />,
    title: '',
    description: '',
    centered: true
  })

  const hasRun = useRef(false);
  const router = useRouter();

  const [voices, setVoices] = useState([]);

  const triggerModal = (title, description, centered = true, icon = <FaMicrophone size={50} />) => {
    setModalOptions({
      icon,
      title,
      description,
      centered
    });
    setShowModal(true);
  }

  const commands = [
    {
      command: 'tell me about Eco Stream',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('about')
      }
    },
    {
      command: 'I want to login',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('login')
      }
    },
    {
      command: 'open home page',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('home')
      }
    },
    
    {
      command: 'I want to create user account',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('user signup')
      }
    },
    {
      command: 'I want to create artist account',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('artist signup')
      }
    },
    {
      command: 'I want to login as a user',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('user login')
      }
    },
    {
      command: 'I want to login as an artist',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('artist login')
      }
    },
    {
      command: 'I want to listen podcast',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('browse podcast')
      }
    },
    
    {
      command: 'I want to contact you',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('contact')
      }
    },
    {
      command: 'open my playlist',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('playlist')
      }
    },
    {
      command: 'i want to reset my password',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('resetPassword')
      }
    },
    
    {
      command: 'i want to logout',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('signout')
      }
    },
    {
      command: 'i want to add podcast',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('add podcast')
      }
    },
    {
      command: 'open categories',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('browse all')
      }
    },
    {
      command: 'open user profile',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('user profile')
      }
    },
    {
      command: 'open artist profile',
      callback: (pageName) => {
        console.log('Opening page: ', pageName);
        voicePageNavigator('artist profile')
      }
    },
    {
      command: 'move page :direction',
      callback: (direction) => {
        console.log('Moving in direction: ', direction);
        if (direction === 'up') {
          window.scrollBy(0, -window.innerHeight);
        } else if (direction === 'down') {
          window.scrollBy(0, window.innerHeight);
        }
      }
    },
    {
      command: 'scroll :direction',
      callback: (direction) => {
        console.log('Scrolling in direction: ', direction);
        if (direction === 'up') {
          window.scrollBy(0, -window.innerHeight);
        } else if (direction === 'down') {
          window.scrollBy(0, window.innerHeight);
        }
      }
    }
  ]

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    finalTranscript
  } = useSpeechRecognition({ commands, continuous: true });

  if (!browserSupportsSpeechRecognition) {
    console.log('Your browser does not support speech recognition software! Please try again with a different browser.');
  }

  const voicePageNavigator = (pageName) => {
    const page = pageDetails.find(page => pageName.toLowerCase().includes(page.pageName.toLowerCase()));
    if (page) {
      voiceResponse(`Navigating to ${pageName} page...`);
      triggerModal('Navigating...', `Navigating to ${pageName} page...`);
      router.push(page.pagePath);
    } else {
      console.log('Page not found!');
    }
  }

  const fillInputUsingVoice = (cb) => {
    if (finalTranscript.toLowerCase().startsWith('enter')) {
      cb();
    }
  }

  const performActionUsingVoice = (triggerCommand, command, cb) => {
    if (finalTranscript.toLowerCase().startsWith(triggerCommand) && finalTranscript.toLowerCase().includes(command)) {
      cb();
    }
  }

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
    }
  }, [])

  // open instruction modal after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setShowInstruction(true);
    }, 2000);
  }, [])


  useEffect(() => {
    if (finalTranscript === 'start listening') {
      voiceResponse('I am listening');
      SpeechRecognition.startListening({ continuous: true });
      triggerModal('Voice Assistant', 'I am listening');
    }
    if (finalTranscript.includes('top listening')) {
      voiceResponse('Okay, I will stop listening now');
      SpeechRecognition.stopListening();
      triggerModal('Voice Assistant', 'Good Bye! Have a nice day!', false, <IconMicrophoneOff size={50} />);
    }
    if (finalTranscript.includes('hello')) {
      resetTranscript();
      voiceResponse('Hello! How can I help you today?');
      SpeechRecognition.startListening({ continuous: true });
    }
    if (finalTranscript.includes('goodbye ')) {
      voiceResponse('Goodbye! Have a nice day!');
      SpeechRecognition.stopListening();
      triggerModal('Voice Assistant', 'Good bye! have a nice Day', false, <IconMicrophoneOff size={50} />);
    }
    if (finalTranscript.includes('scroll up')) {
      window.scrollBy(0, -window.innerHeight / 2);
      // trigger info modal here
      // setShowModal(true);
      triggerModal('Scrolling Up');
      resetTranscript();
      triggerModal('Scrolling Up', '', true, <IconArrowUp size={50} />);
    }

    if (finalTranscript.includes('scroll down')) {
      window.scrollBy(0, window.innerHeight / 2);
      // setShowModal(true);
      triggerModal('Scrolling Down');
      resetTranscript();
      triggerModal('Scrolling Down', '', true, <IconArrowDown size={50} />);
    }

    if (finalTranscript.includes('move to bottom')) {
      window.scrollTo(0, document.body.scrollHeight);
      resetTranscript();
      triggerModal('Moving to Bottom', '', true, <IconArrowDownBar size={50} />);
    }

    if (finalTranscript.includes('move to top')) {
      window.scrollTo(0, 0);
      resetTranscript();
      triggerModal('Moving to Top', '', true, <IconArrowUpBar size={50} />);
    }
    if (finalTranscript.includes('browse products') || finalTranscript.includes('view all products')) {
      resetTranscript();
      voiceResponse('Showing all products');
      router.push('/productView');
    }
  }, [finalTranscript])
  
  const voiceResponse = (text) => {
    speech.text = text;
    window.speechSynthesis.speak(speech);
  }

  useEffect(() => {

    const synth = window.speechSynthesis;
    const voices = synth.getVoices();

    speech.voice = voices[12];
    speech.lang = 'en-US';
    speech.volume = 1; // From 0 to 1
    speech.text = 'Hello! How can I help you?';
    console.log(speech);
    
    window.speechSynthesis.speak(speech);
  }, [])
  

  const interpretVoiceCommand = () => {
    // const last = event.results.length - 1;
    // const command = event.results[last][0].transcript;
    console.log('Voice Command: ', transcript);
    if (transcript.includes('home')) {
      voicePageNavigator('home');
    } else if (transcript.includes('sign up')) {
      voicePageNavigator('signup');
    } else if (transcript.includes('login')) {
      voicePageNavigator('login');
    } else if (transcript.includes('contact')) {
      voicePageNavigator('contact');
    } else if (transcript.includes('reset password')) {
      voicePageNavigator('reset password');
    } else if (transcript.includes('hello')) {
      voiceResponse('Hello! How can I help you?');
    } else if (transcript.includes('goodbye')) {
      voiceResponse('Goodbye! Have a nice day!');
    } else {
      voiceResponse('Sorry, I did not understand that command. Please try again.');
    }
  }


  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      // console.log(e.code);
      if (e.code === 'Space' && e.ctrlKey) {
        SpeechRecognition.startListening();
      }
    });
  }, [])


  useEffect(() => {
    const synth = window.speechSynthesis;
    if ("onvoiceschanged" in synth) {
      setVoices(voices);
      console.log(voices);
      synth.onvoiceschanged = loadVoices;
    }
  }, [])

  const loadVoices = () => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    setVoices(voices);
    // console.log(voices);
    speech.voice = voices[12];
  }

  const checkExistenceInTranscript = (commandArray) => {
    const command = commandArray.find(command => finalTranscript.includes(command));
    return command;
  }

  return (
    <VoiceContext.Provider value={{
      transcript,
      resetTranscript,
      interpretVoiceCommand,
      fillInputUsingVoice,
      performActionUsingVoice,
      finalTranscript,
      voiceResponse,
      voices,
      triggerModal,
      checkExistenceInTranscript
    }}>
      {/* Fixed position mic button in bottom right corner */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3" style={{ position: 'fixed', right: '24px', bottom: '24px', alignItems: 'flex-end', zIndex: 100 }}>
        {/* Transcript display above the mic button */}
        {listening && (
          <div className="bg-gray-900/90 backdrop-blur-sm border border-purple-500/50 rounded-lg px-4 py-3 shadow-xl max-w-xs">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-sm text-purple-300 font-medium">Listening...</p>
            </div>
            <p className="text-white text-sm max-h-32 overflow-y-auto">
              {transcript || "Say something..."}
            </p>
          </div>
        )}
        
        {/* Enhanced mic button with pulsing ring when active */}
        <div className="relative">
          <div className={listening ? "absolute inset-0 rounded-full shadow-[0_0_15px_3px_rgba(168,85,247,0.7)] animate-ping animate-duration-[1.5s]" : ""}></div>
          <button 
            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              listening 
                ? "bg-gradient-to-r from-purple-600 to-purple-800 ring-4 ring-purple-500/50" 
                : "bg-gradient-to-r from-purple-500 to-purple-700 hover:scale-105"
            }`}
            onClick={() => {
              if (listening) {
                SpeechRecognition.stopListening();
                triggerModal('Voice Assistant', 'Listening stopped', false, <IconMicrophoneOff size={30} />);
              } else {
                SpeechRecognition.startListening();
                triggerModal('Voice Assistant', 'Listening...', false, <FaMicrophone size={30} />);
              }
            }}
          >
            <div className={`${listening ? "animate-pulse" : ""}`}>
              <FaMicrophone className="text-white text-2xl" />
            </div>
          </button>
        </div>
      </div>

      {children}
      <InfoModal {...modalOptions} showModal={showModal} setShowModal={setShowModal} />
    </VoiceContext.Provider>
  )
}

const useVoiceContext = () => useContext(VoiceContext);

export default useVoiceContext;