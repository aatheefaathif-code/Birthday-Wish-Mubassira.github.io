/**
 * MUBASSIRA BIRTHDAY WEBSITE - JAVASCRIPT
 * Interactive Experience: Cake blowing, Web Audio mic detection,
 * confetti physics, balloon animations & cousin birthday surprise!
 */

(function () {
  'use strict';

  // --- DOM Elements ---
  const surpriseTriggerBtn = document.getElementById('surprise-trigger-btn');
  const cakeScene = document.getElementById('cake-scene');
  const candle = document.getElementById('candle');
  const manualBlowBtn = document.getElementById('manual-blow-btn');
  const micButton = document.getElementById('mic-button');
  const micStatus = document.getElementById('mic-status');
  const micMeterWrapper = document.getElementById('mic-meter-wrapper');
  const meterFill = document.getElementById('meter-fill');
  const celebrationSection = document.getElementById('celebration-section');
  const confettiCanvas = document.getElementById('confetti-canvas');
  const balloonContainer = document.getElementById('balloon-container');
  const relightBtn = document.getElementById('relight-btn');
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const musicIcon = document.getElementById('music-icon');
  const musicLabel = document.getElementById('music-label');
  const miniBalloons = document.querySelectorAll('.pop-balloon');
  const popMessage = document.getElementById('pop-message');

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // --- Audio State for Melodies & SFX ---
  let globalAudioCtx = null;
  let isMusicPlaying = false;
  let melodyTimeoutIds = [];

  function getAudioContext() {
    if (!globalAudioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        globalAudioCtx = new AudioCtxClass();
      }
    }
    if (globalAudioCtx && globalAudioCtx.state === 'suspended') {
      globalAudioCtx.resume().catch(() => {});
    }
    return globalAudioCtx;
  }

  // Synthesized Pop Sound
  function playPopSound() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch (e) {
      // Audio autoplay restrictions or unsupported
    }
  }

  // Synthesized Magical Sparkle Sound
  function playSparkleSound() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51]; // C5, E5, G5, C6, E6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        const startTime = ctx.currentTime + idx * 0.06;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.15, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.36);
      });
    } catch (e) {}
  }

  // Synthesized Cheerful Birthday Tune (Happy Birthday Melody)
  function playBirthdayTune() {
    stopBirthdayTune();
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      isMusicPlaying = true;
      musicToggleBtn.classList.add('playing');
      musicIcon.textContent = '🎶';
      musicLabel.textContent = 'Music: Playing';

      // Notes frequencies (Hz)
      const G4 = 392.00, A4 = 440.00, B4 = 493.88, C5 = 523.25;
      const D5 = 587.33, E5 = 659.25, F5 = 698.46, G5 = 783.99;

      // Note, duration (seconds)
      const melody = [
        { f: G4, d: 0.35 }, { f: G4, d: 0.18 }, { f: A4, d: 0.5 }, { f: G4, d: 0.5 }, { f: C5, d: 0.5 }, { f: B4, d: 0.9 },
        { f: G4, d: 0.35 }, { f: G4, d: 0.18 }, { f: A4, d: 0.5 }, { f: G4, d: 0.5 }, { f: D5, d: 0.5 }, { f: C5, d: 0.9 },
        { f: G4, d: 0.35 }, { f: G4, d: 0.18 }, { f: G5, d: 0.5 }, { f: E5, d: 0.5 }, { f: C5, d: 0.5 }, { f: B4, d: 0.5 }, { f: A4, d: 0.8 },
        { f: F5, d: 0.35 }, { f: F5, d: 0.18 }, { f: E5, d: 0.5 }, { f: C5, d: 0.5 }, { f: D5, d: 0.5 }, { f: C5, d: 1.1 }
      ];

      let accumulatedTime = 0;
      melody.forEach(item => {
        const timer = setTimeout(() => {
          if (!isMusicPlaying) return;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(item.f, ctx.currentTime);

          gain.gain.setValueAtTime(0.18, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + item.d * 0.95);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + item.d);
        }, accumulatedTime * 1000);

        melodyTimeoutIds.push(timer);
        accumulatedTime += item.d + 0.05;
      });

      // Repeat or conclude
      const loopTimer = setTimeout(() => {
        if (isMusicPlaying) {
          playBirthdayTune();
        }
      }, (accumulatedTime + 1.2) * 1000);
      melodyTimeoutIds.push(loopTimer);

    } catch (e) {
      isMusicPlaying = false;
      musicToggleBtn.classList.remove('playing');
      musicIcon.textContent = '🎵';
      musicLabel.textContent = 'Music: Off';
    }
  }

  function stopBirthdayTune() {
    isMusicPlaying = false;
    melodyTimeoutIds.forEach(id => clearTimeout(id));
    melodyTimeoutIds = [];
    musicToggleBtn.classList.remove('playing');
    musicIcon.textContent = '🎵';
    musicLabel.textContent = 'Music: Off';
  }

  // --- Confetti System ---
  const ctx = confettiCanvas.getContext('2d');
  let confettiParticles = [];
  let confettiAnimFrame = null;

  function resizeCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function triggerConfettiBurst(count = 140) {
    if (reducedMotion.matches || !ctx) return;
    cancelAnimationFrame(confettiAnimFrame);

    const colors = [
      '#ffd1e6', '#f472b6', '#db2777',
      '#d8b4fe', '#c084fc', '#9333ea',
      '#fef08a', '#fde047', '#a5f3fc', '#ffffff'
    ];
    const shapes = ['rect', 'circle', 'heart'];

    confettiParticles = Array.from({ length: count }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 100 + Math.random() * 280;
      return {
        x: confettiCanvas.width * (0.3 + Math.random() * 0.4),
        y: confettiCanvas.height * 0.45,
        vx: Math.cos(angle) * speed * 0.6,
        vy: -Math.abs(Math.sin(angle) * speed) - 50,
        gravity: 120 + Math.random() * 80,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 6,
        size: 7 + Math.random() * 9,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        opacity: 1
      };
    });

    let lastTime = performance.now();

    function renderConfetti(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

      confettiParticles.forEach(p => {
        p.vy += p.gravity * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rotation += p.rotSpeed * dt;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'heart') {
          // Quick heart shape
          ctx.beginPath();
          const s = p.size * 0.45;
          ctx.moveTo(0, s);
          ctx.bezierCurveTo(-s, -s * 0.6, -s * 1.6, s * 0.4, 0, s * 1.8);
          ctx.bezierCurveTo(s * 1.6, s * 0.4, s, -s * 0.6, 0, s);
          ctx.fill();
        } else {
          // Ribbon / Rect
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        }
        ctx.restore();
      });

      // Filter particles within bounds
      confettiParticles = confettiParticles.filter(p => p.y < confettiCanvas.height + 40);

      if (confettiParticles.length > 0) {
        confettiAnimFrame = requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      }
    }

    confettiAnimFrame = requestAnimationFrame(renderConfetti);
  }

  // --- Floating Balloons Animation ---
  function releaseFloatingBalloons() {
    if (reducedMotion.matches) return;
    const balloonColors = [
      '#f472b6', '#c084fc', '#fde047', '#fbcfe8', '#d8b4fe', '#a5f3fc'
    ];

    for (let i = 0; i < 9; i++) {
      setTimeout(() => {
        const balloon = document.createElement('div');
        balloon.className = 'floating-balloon';
        const chosenColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        balloon.style.backgroundColor = chosenColor;
        balloon.style.left = `${10 + Math.random() * 80}%`;
        balloon.style.animationDuration = `${6.5 + Math.random() * 4}s`;

        const string = document.createElement('div');
        string.className = 'balloon-string';
        balloon.appendChild(string);

        balloonContainer.appendChild(balloon);

        setTimeout(() => {
          balloon.remove();
        }, 11000);
      }, i * 350);
    }
  }

  // --- Microphone & Candle Blowing Logic ---
  let isCandleLit = false;
  let micStream = null;
  let micAudioContext = null;
  let listeningAnimFrame = null;
  let micSafetyTimer = null;
  let micSessionId = 0;

  function stopMicrophone() {
    micSessionId++;
    if (listeningAnimFrame) cancelAnimationFrame(listeningAnimFrame);
    if (micSafetyTimer) clearTimeout(micSafetyTimer);

    if (micStream) {
      micStream.getTracks().forEach(track => track.stop());
      micStream = null;
    }

    if (micAudioContext) {
      micAudioContext.close().catch(() => {});
      micAudioContext = null;
    }

    micMeterWrapper.hidden = true;
    meterFill.style.width = '0%';
    micButton.disabled = false;
    micButton.querySelector('.btn-label').textContent = 'Enable Mic to Blow';
  }

  function blowOutCandle() {
    if (!isCandleLit) return;
    isCandleLit = false;

    stopMicrophone();

    // Extinguish candle visually
    candle.classList.add('out');
    candle.setAttribute('aria-label', 'Candle is blown out');
    candle.style.pointerEvents = 'none';

    // Update Mic Status and Buttons
    micStatus.innerHTML = '🎉 <strong>Woohoo! Your wish has been made, Mubassira!</strong> 💖';
    micButton.style.display = 'none';
    manualBlowBtn.style.display = 'none';

    // Play celebration audio & effects
    playSparkleSound();
    triggerConfettiBurst(160);
    releaseFloatingBalloons();

    // Reveal Celebration Section
    celebrationSection.hidden = false;
    surpriseTriggerBtn.querySelector('.btn-text').textContent = 'Relight & Make Another Wish';
    surpriseTriggerBtn.querySelector('.btn-emoji').textContent = '🎂';

    // Start celebratory background melody if not already playing
    if (!isMusicPlaying) {
      setTimeout(() => {
        playBirthdayTune();
      }, 500);
    }

    // Smooth scroll down to personalized birthday letter
    setTimeout(() => {
      celebrationSection.scrollIntoView({
        behavior: reducedMotion.matches ? 'instant' : 'smooth',
        block: 'start'
      });
    }, 450);
  }

  // Setup Microphone Listener using Web Audio API
  async function startMicrophoneListening() {
    if (!isCandleLit) return;

    if (!navigator.mediaDevices?.getUserMedia || !(window.AudioContext || window.webkitAudioContext)) {
      micStatus.textContent = 'Microphone access is unavailable in this browser. Please tap the flame to blow it out! 🕯️';
      return;
    }

    stopMicrophone();
    const currentSession = micSessionId;
    micButton.disabled = true;
    micStatus.textContent = 'Please allow microphone access when prompted...';

    try {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      const context = new AudioCtxClass();
      micAudioContext = context;
      await context.resume();

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false
        },
        video: false
      });

      if (currentSession !== micSessionId || !isCandleLit) {
        stream.getTracks().forEach(t => t.stop());
        return;
      }

      micStream = stream;
      const analyser = context.createAnalyser();
      analyser.fftSize = 1024;
      analyser.smoothingTimeConstant = 0.2;

      const source = context.createMediaStreamSource(stream);
      source.connect(analyser);

      const samples = new Uint8Array(analyser.fftSize);
      const startTime = performance.now();
      let lastTime = startTime;
      let sustainedDuration = 0;
      let baselineSum = 0;
      let baselineCount = 0;

      micStatus.textContent = 'Calibrating... stay quiet for just a second 🤫';
      micButton.querySelector('.btn-label').textContent = 'Listening to Blow...';
      micMeterWrapper.hidden = false;

      function analyzeAudio(now) {
        if (currentSession !== micSessionId || !isCandleLit) return;

        analyser.getByteTimeDomainData(samples);

        // Calculate root mean square (RMS) volume
        let sumSquares = 0;
        for (let i = 0; i < samples.length; i++) {
          const norm = (samples[i] - 128) / 128;
          sumSquares += norm * norm;
        }
        const volume = Math.sqrt(sumSquares / samples.length);

        const dt = Math.min(now - lastTime, 100);
        lastTime = now;

        // Visual Volume Meter
        const meterPercent = Math.min(100, Math.round(volume * 400));
        meterFill.style.width = `${meterPercent}%`;

        // 1-second background noise baseline calibration
        if (now - startTime < 1000) {
          baselineSum += volume;
          baselineCount++;
        } else {
          micStatus.innerHTML = 'Now <strong>gently blow</strong> towards your microphone! 🌬️';

          const averageBaseline = baselineSum / Math.max(baselineCount, 1);
          // Dynamic sensitivity threshold with sensible floor and ceiling
          const blowThreshold = Math.max(0.045, Math.min(0.22, averageBaseline * 2.6));

          if (volume > blowThreshold) {
            sustainedDuration += dt;
          } else {
            sustainedDuration = Math.max(0, sustainedDuration - dt * 1.5);
          }

          // Trigger blowout if sustained blowing detected for > 220ms
          if (sustainedDuration > 220) {
            blowOutCandle();
            return;
          }
        }

        listeningAnimFrame = requestAnimationFrame(analyzeAudio);
      }

      listeningAnimFrame = requestAnimationFrame(analyzeAudio);

      // Auto shut-off after 35 seconds of listening to save battery
      micSafetyTimer = setTimeout(() => {
        stopMicrophone();
        micStatus.textContent = "Didn't catch the blow? Tap the flame or the button to make your wish!";
      }, 35000);

    } catch (err) {
      if (currentSession !== micSessionId) return;
      stopMicrophone();
      console.warn('Microphone error:', err);
      micStatus.textContent = 'Mic access was blocked or denied. No worries, tap the flame to blow it out! ✨';
    }
  }

  // --- Reset / Relight Candle ---
  function resetCandle() {
    stopMicrophone();
    isCandleLit = true;

    cakeScene.hidden = false;
    candle.classList.remove('out');
    candle.setAttribute('aria-label', 'Tap to blow out the candle');
    candle.style.pointerEvents = 'auto';

    micButton.style.display = 'inline-flex';
    manualBlowBtn.style.display = 'inline-flex';
    micStatus.textContent = 'Blow out your candle! Enable your mic or tap the flame. 🎂';

    triggerConfettiBurst(60);

    cakeScene.scrollIntoView({
      behavior: reducedMotion.matches ? 'instant' : 'smooth',
      block: 'nearest'
    });
  }

  // --- Event Listeners ---

  // Hero Surprise Button: opens cake scene and lights candle
  surpriseTriggerBtn.addEventListener('click', () => {
    surpriseTriggerBtn.setAttribute('aria-expanded', 'true');
    resetCandle();
  });

  // Tap-to-blow Candle listeners
  candle.addEventListener('click', blowOutCandle);
  candle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      blowOutCandle();
    }
  });

  manualBlowBtn.addEventListener('click', blowOutCandle);

  // Mic Button Listener
  micButton.addEventListener('click', () => {
    if (isCandleLit) {
      startMicrophoneListening();
    }
  });

  // Relight Button (inside celebration section)
  relightBtn.addEventListener('click', resetCandle);

  // Music Toggle Button
  musicToggleBtn.addEventListener('click', () => {
    if (isMusicPlaying) {
      stopBirthdayTune();
    } else {
      playBirthdayTune();
    }
  });

  // Interactive Mini Balloon Pop Game
  miniBalloons.forEach(balloon => {
    balloon.addEventListener('click', () => {
      if (balloon.classList.contains('popped')) return;

      balloon.classList.add('popped');
      playPopSound();
      triggerConfettiBurst(35);

      const wish = balloon.getAttribute('data-wish');
      popMessage.textContent = wish;
      popMessage.style.opacity = '1';

      // Respawn balloon after 5 seconds for endless fun
      setTimeout(() => {
        balloon.classList.remove('popped');
      }, 5000);
    });
  });

  // Pause Mic & Background tasks if tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopMicrophone();
    }
  });

  window.addEventListener('pagehide', () => {
    stopMicrophone();
    stopBirthdayTune();
  });

  // Initial Light Confetti on load
  setTimeout(() => {
    triggerConfettiBurst(45);
  }, 400);

})();
