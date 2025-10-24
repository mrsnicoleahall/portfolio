
import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import { Mail, Linkedin, MapPin, Download, Building as Build, Wrench, Package } from 'lucide-react';

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
          toast({
            title: "ERROR: INVALID EMAIL FORMAT",
            description: "Please enter a valid email address.",
            variant: "destructive"
          });
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

    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Save to localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        submissions.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      } catch (error) {
        console.error("Could not save to localStorage", error);
      }
    }

    toast({
      title: "MESSAGE TRANSMITTED SUCCESSFULLY",
      description: "Connection established. Response incoming.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setStep(0);
    setIsSubmitting(false);
  };

  const handleDownload = () => {
    toast({
      title: "DOWNLOAD UNAVAILABLE",
      description: "This feature will be implemented soon.",
    });
  };

  const services = [
    {
      icon: Build,
      title: "Build a system that proves itself",
      description: "You get a plan, the build, the measurement, and the receipts. No dead hand-offs.",
      color: "var(--creative-accent)"
    },
    {
      icon: Wrench,
      title: "Fix what's leaking",
      description: "If your traffic is fine but your pipeline isn't, I'll find the break and patch it fast.",
      color: "var(--technical-accent)"
    },
    {
      icon: Package,
      title: "Ship one high-impact thing",
      description: "A landing page. A campaign. A workflow. Scoped to 30 days, tied to numbers.",
      color: "var(--primary)"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact | Nicole Hall - Marketing Engineer</title>
        <meta name="description" content="Build systems, fix leaks, or ship high-impact work. All tied to numbers and delivered with proof." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="py-16 space-y-24">
        {/* How I Can Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-16"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
              How I Can Help
            </h1>
            <p className="text-xl text-muted-foreground">
              Build, fix, or ship. Always with proof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 group relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)`}}
                  initial={{ x: "-100%" }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.8, ease: 'circOut', delay: 0.2 + index * 0.2 }}
                />

                <div className="relative z-10">
                  <service.icon className="w-10 h-10 mb-6" style={{ color: service.color }} />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground">
            Use the terminal below or reach out via email
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* DOS Terminal Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="glass-card p-8 font-mono bg-black/90 border-2 border-creative-accent/30 shadow-[0_0_30px_rgba(0,245,212,0.1)]">
              {/* Terminal Header */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-creative-accent/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs text-creative-accent/60">nicole@portfolio ~ %</span>
              </div>

              {/* Terminal Content */}
              <div className="space-y-4 min-h-[400px]">
                <div className="text-sm">
                  <p className="text-creative-accent">$ ./contact.sh</p>
                  <p className="text-creative-accent/70 mt-1">Initializing contact protocol...</p>
                  <p className="text-green-400 mt-1">✓ Ready to receive input</p>
                  <p className="mt-4 text-border">─────────────────────────────────</p>
                </div>

                {/* Previous entries */}
                {prompts.slice(0, step).map((prompt, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <p className="text-creative-accent text-sm font-bold">$ {prompt.prompt}</p>
                    <p className="text-creative-accent pl-4 font-semibold">
                      {formData[prompt.field]}
                      <span className="inline-block w-2 h-5 bg-creative-accent ml-1 animate-pulse" />
                    </p>
                  </motion.div>
                ))}

                {/* Current prompt */}
                {step < prompts.length && !isSubmitting && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <p className="text-creative-accent text-sm font-bold mb-3">
                      $ {prompts[step].prompt}
                    </p>
                    <div className="relative">
                      <div className="flex items-center pl-4 py-2 bg-black/40 rounded border border-creative-accent/20">
                        <input
                          ref={inputRef}
                          type="text"
                          value={currentInput}
                          onChange={(e) => setCurrentInput(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder={prompts[step].placeholder}
                          className="flex-1 bg-transparent outline-none text-creative-accent caret-transparent font-semibold placeholder:text-creative-accent/30 placeholder:text-sm"
                          autoComplete="off"
                        />
                        {showCursor && (
                          <span className="inline-block w-2 h-5 bg-creative-accent ml-1 animate-pulse" />
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-creative-accent/60 pl-4 pt-3">
                      ↵ Press ENTER to continue
                    </p>
                  </motion.div>
                )}

                {/* Submission state */}
                {step === prompts.length && !isSubmitting && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <p className="text-sm text-border">─────────────────────────────────</p>
                    <p className="text-creative-accent text-sm font-bold">$ echo "Review Input"</p>
                    <div className="pl-4 space-y-1 text-sm bg-black/40 p-4 rounded border border-creative-accent/20">
                      <p><span className="text-creative-accent/60">Name:</span> <span className="text-creative-accent font-semibold">{formData.name}</span></p>
                      <p><span className="text-creative-accent/60">Email:</span> <span className="text-creative-accent font-semibold">{formData.email}</span></p>
                      <p><span className="text-creative-accent/60">Message:</span> <span className="text-creative-accent font-semibold">{formData.message}</span></p>
                    </div>
                    <div className="pt-4 flex gap-4">
                      <motion.button
                        onClick={handleSubmit}
                        className="flex-1 px-6 py-3 bg-creative-accent text-black font-black rounded hover:bg-creative-accent/90 transition-colors border-2 border-creative-accent shadow-[0_0_20px_rgba(0,245,212,0.3)]"
                        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,245,212,0.5)' }}
                        whileTap={{ scale: 0.98 }}
                      >
                        [TRANSMIT]
                      </motion.button>
                      <motion.button
                        onClick={() => { setStep(0); setFormData({ name: '', email: '', message: '' }); }}
                        className="px-6 py-3 border-2 border-creative-accent/50 text-creative-accent font-bold rounded hover:bg-creative-accent/10 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        [RESET]
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {isSubmitting && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-2 text-creative-accent text-sm"
                  >
                    <p>$ curl -X POST https://api.nicolehall.com/contact</p>
                    <p className="text-creative-accent/70">Sending payload...</p>
                    <p className="text-green-400">✓ Connection established</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-creative-accent rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-creative-accent rounded-full animate-pulse delay-75" />
                      <div className="w-2 h-2 bg-creative-accent rounded-full animate-pulse delay-150" />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Other Channels */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <h3 className="text-3xl font-bold mb-2">Alternative Channels</h3>
              <p className="text-muted-foreground">Prefer a different protocol? Choose your method.</p>
            </div>
            <div className="space-y-3">
              <motion.a
                href="mailto:mrsnicoleahall@gmail.com"
                className="flex items-center gap-4 p-5 glass-card hover:border-creative-accent/50 border border-transparent transition-all duration-300"
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 rounded-lg bg-creative-accent/10">
                  <Mail className="w-6 h-6 text-creative-accent"/>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">mrsnicoleahall@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/real-strategy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 glass-card hover:border-technical-accent/50 border border-transparent transition-all duration-300"
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 rounded-lg bg-technical-accent/10">
                  <Linkedin className="w-6 h-6 text-technical-accent"/>
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/real-strategy</p>
                </div>
              </motion.a>

              <div className="flex items-center gap-4 p-5 glass-card">
                <div className="p-3 rounded-lg bg-card">
                  <MapPin className="w-6 h-6 text-muted-foreground"/>
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-muted-foreground">Raleigh, NC</p>
                </div>
              </div>

              <motion.button
                onClick={handleDownload}
                className="w-full flex items-center gap-4 p-5 glass-card text-left hover:border-primary/50 border border-transparent transition-all duration-300"
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 rounded-lg bg-card">
                  <Download className="w-6 h-6 text-muted-foreground"/>
                </div>
                <div>
                  <p className="font-semibold">Resume</p>
                  <p className="text-sm text-muted-foreground">Download PDF</p>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
