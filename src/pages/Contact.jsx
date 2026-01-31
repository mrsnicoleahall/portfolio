import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [currentInput, setCurrentInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef(null);

  const prompts = [
    { field: 'name', prompt: 'ENTER YOUR NAME:', placeholder: 'John Smith' },
    { field: 'email', prompt: 'ENTER YOUR EMAIL:', placeholder: 'john@example.com' },
    { field: 'message', prompt: 'ENTER YOUR MESSAGE:', placeholder: 'I would like to discuss...' }
  ];


  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Auto-focus input
  useEffect(() => {
    if (inputRef.current && step < prompts.length) {
      inputRef.current.focus();
    }
  }, [step]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && currentInput.trim() && step < prompts.length) {
      e.preventDefault();
      const currentPrompt = prompts[step];

      // Validate email if on email step
      if (currentPrompt.field === 'email') {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(currentInput)) {
          alert('ERROR: INVALID EMAIL FORMAT');
          return;
        }
      }

      setFormData(prev => ({ ...prev, [currentPrompt.field]: currentInput }));
      setCurrentInput('');
      setStep(prev => prev + 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xanprgel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Save to localStorage as backup
        if (typeof window !== 'undefined' && window.localStorage) {
          try {
            const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            submissions.push({ ...formData, submittedAt: new Date().toISOString() });
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
          } catch (error) {
            console.error("Could not save to localStorage", error);
          }
        }

        alert('MESSAGE TRANSMITTED SUCCESSFULLY');

        // Reset form
        setFormData({ name: '', email: '', message: '' });
        setStep(0);
      } else {
        alert('ERROR: TRANSMISSION FAILED - Please try again or use email');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('ERROR: CONNECTION FAILED - Please try again or use email');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Nicole Hall - Marketing Engineer</title>
        <meta name="description" content="Get in touch via terminal or email." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen pt-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
          <div className="text-center mb-8 md:mb-16">
            <p className="text-green-400 font-mono text-sm mb-2">$ cd contact && ls</p>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-cyan-400 font-mono">
              &gt; CONTACT
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-mono">
              Use the terminal below or reach out via email
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Terminal Form - Left Side */}
            <div className="relative">
              <div className="bg-black border-2 border-black p-4 md:p-8 font-mono flex flex-col min-h-[600px]">
                {/* Terminal Header */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/20">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-white/60">nicole@portfolio ~ %</span>
                </div>

                {/* Terminal Content */}
                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="text-sm">
                    <p className="text-white">$ ./contact.sh</p>
                    <p className="text-white/70 mt-1">Initializing contact protocol...</p>
                    <p className="text-green-400 mt-1">✓ Ready to receive input</p>
                    <p className="mt-4 text-white/30">─────────────────────────────────</p>
                  </div>

                  {/* Previous entries */}
                  {prompts.slice(0, step).map((prompt, idx) => (
                    <div key={idx} className="space-y-2">
                      <p className="text-white text-sm font-bold">$ {prompt.prompt}</p>
                      <p className="text-white pl-4 font-semibold">
                        {formData[prompt.field]}
                      </p>
                    </div>
                  ))}

                  {/* Current prompt */}
                  {step < prompts.length && !isSubmitting && (
                    <div className="space-y-2">
                      <p className="text-white text-sm font-bold mb-3">
                        $ {prompts[step].prompt}
                      </p>
                      <div className="relative">
                        <div className="flex items-center pl-4 py-2 bg-white/10 border border-white/20">
                          <input
                            ref={inputRef}
                            type="text"
                            value={currentInput}
                            onChange={(e) => setCurrentInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder={prompts[step].placeholder}
                            className="flex-1 bg-transparent outline-none text-white caret-white font-semibold placeholder:text-white/30 placeholder:text-sm"
                            autoComplete="off"
                          />
                          {showCursor && (
                            <span className="inline-block w-2 h-5 bg-white ml-1" />
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-white/60 pl-4 pt-3">
                        ↵ Press ENTER to continue
                      </p>
                    </div>
                  )}

                  {/* Submission state */}
                  {step === prompts.length && !isSubmitting && (
                    <div className="space-y-4">
                      <p className="text-sm text-white/30">─────────────────────────────────</p>
                      <p className="text-white text-sm font-bold">$ echo "Review Input"</p>
                      <div className="pl-4 space-y-1 text-sm bg-white/5 p-4 border border-white/20">
                        <p><span className="text-white/60">Name:</span> <span className="text-white font-semibold">{formData.name}</span></p>
                        <p><span className="text-white/60">Email:</span> <span className="text-white font-semibold">{formData.email}</span></p>
                        <p><span className="text-white/60">Message:</span> <span className="text-white font-semibold">{formData.message}</span></p>
                      </div>
                      <div className="pt-4 flex gap-4">
                        <button
                          onClick={handleSubmit}
                          className="flex-1 px-6 py-3 bg-white text-black font-black uppercase tracking-wide hover:bg-gray-200"
                        >
                          [TRANSMIT]
                        </button>
                        <button
                          onClick={() => { setStep(0); setFormData({ name: '', email: '', message: '' }); }}
                          className="px-6 py-3 border-2 border-white text-white font-bold uppercase tracking-wide hover:bg-white/10"
                        >
                          [RESET]
                        </button>
                      </div>
                    </div>
                  )}

                  {isSubmitting && (
                    <div className="space-y-2 text-white text-sm">
                      <p>$ curl -X POST https://formspree.io/f/xanprgel</p>
                      <p className="text-white/70">Sending payload...</p>
                      <p className="text-green-400">✓ Connection established</p>
                      <p className="text-white/70">Transmitting data...</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Alternative Channels - Right Side */}
            <div className="space-y-6">
              <div>
                <p className="text-green-400 font-mono text-sm mb-2">$ cat channels.txt</p>
                <h3 className="text-3xl font-bold mb-2 uppercase text-cyan-400 font-mono">ALTERNATIVE_CHANNELS</h3>
                <p className="text-gray-400 font-mono text-sm">Prefer a different protocol? Choose your method.</p>
              </div>
              <div className="space-y-3">
                <a
                  href="mailto:mrsnicoleahall@gmail.com"
                  className="flex items-center gap-4 p-5 border-2 border-white/20 bg-black hover:bg-white/5 transition-colors"
                >
                  <div className="text-2xl text-white">✉</div>
                  <div>
                    <p className="font-semibold text-white font-mono">Email</p>
                    <p className="text-sm text-gray-400 font-mono">mrsnicoleahall@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/marketing-nicole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 border-2 border-white/20 bg-black hover:bg-white/5 transition-colors"
                >
                  <div className="text-2xl text-white">in</div>
                  <div>
                    <p className="font-semibold text-white font-mono">LinkedIn</p>
                    <p className="text-sm text-gray-400 font-mono">linkedin.com/in/marketing-nicole</p>
                  </div>
                </a>

                <a
                  href="https://medium.com/@mrsnicoleahall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 border-2 border-white/20 bg-black hover:bg-white/5 transition-colors"
                >
                  <div className="text-2xl">📝</div>
                  <div>
                    <p className="font-semibold text-white font-mono">Blog</p>
                    <p className="text-sm text-gray-400 font-mono">medium.com/@mrsnicoleahall</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 border-2 border-white/20 bg-black">
                  <div className="text-2xl">📍</div>
                  <div>
                    <p className="font-semibold text-white font-mono">Location</p>
                    <p className="text-sm text-gray-400 font-mono">Raleigh, NC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
