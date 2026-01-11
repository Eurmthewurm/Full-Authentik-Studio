import React, { useEffect, useState, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const SoundController: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  const initAudio = useCallback(() => {
    if (!audioCtx && !isMuted) {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioCtx(ctx);
    }
  }, [audioCtx, isMuted]);

  const playTone = useCallback((freq: number, type: OscillatorType, duration: number, vol: number) => {
    if (isMuted || !audioCtx) return;
    
    // Resume context if suspended (browser policy)
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  }, [audioCtx, isMuted]);

  const playHover = () => playTone(800, 'sine', 0.05, 0.05);
  const playClick = () => playTone(1200, 'triangle', 0.1, 0.1);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        playHover();
      }
    };

    const handleClick = () => {
      playClick();
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('click', handleClick);
    // Init audio on first interaction
    window.addEventListener('click', initAudio, { once: true });

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('click', initAudio);
    };
  }, [playHover, playClick, initAudio]);

  return (
    <div className="fixed bottom-8 left-8 z-50">
       <button 
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 transition-all group"
       >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
             AUDIO {isMuted ? 'OFF' : 'ON'}
          </span>
       </button>
    </div>
  );
};

export default SoundController;