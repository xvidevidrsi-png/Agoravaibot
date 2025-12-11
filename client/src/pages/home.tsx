import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Terminal, CheckCircle2, AlertTriangle, Info, Shield, Swords, Coins, Zap, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav className="border-b border-white/5 bg-background/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/20">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg tracking-tight">Bot Zeus</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">Recursos</a>
            <a href="#deploy" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">Deploy</a>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Adicionar ao Discord
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-150 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            v2.0 Disponível Agora
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
          >
            O Bot Definitivo para <br/>
            <span className="text-primary">Competitivo e Apostas</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Gerencie filas 1v1, sistemas de apostas e moderação do seu servidor de Discord com uma única ferramenta poderosa e fácil de usar.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" className="h-12 px-8 text-base bg-white text-black hover:bg-white/90 w-full sm:w-auto">
              Começar Agora
            </Button>
            <a href="#deploy" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/10 hover:bg-white/5 w-full sm:w-auto">
                <Terminal className="w-4 h-4 mr-2" />
                Instalar no Render
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Servidores Ativos", value: "500+" },
              { label: "Partidas 1v1", value: "12k+" },
              { label: "Usuários", value: "45k+" },
              { label: "Uptime", value: "99.9%" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Recursos Poderosos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Tudo que você precisa para elevar o nível do seu servidor de jogos.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-white/5 hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Swords className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle>Filas 1v1 Automáticas</CardTitle>
                <CardDescription>Matchmaking justo e rápido para seus membros.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Sistema completo de filas com criação automática de canais de voz e texto para as partidas.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/5 hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                  <Coins className="w-6 h-6 text-yellow-400" />
                </div>
                <CardTitle>Economia e Apostas</CardTitle>
                <CardDescription>Sistema de moedas integrado para apostas.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Permita que jogadores apostem em suas partidas com segurança e controle total da banca.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/5 hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle>Moderação Avançada</CardTitle>
                <CardDescription>Ferramentas para manter a ordem.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Logs detalhados, comandos de punição e sistema de tickets para suporte aos membros.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deploy Section (Original Content) */}
      <section id="deploy" className="py-24 px-6 bg-black/40 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
              <Server className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">Central de Deploy</h2>
              <p className="text-muted-foreground">Área do desenvolvedor: baixe e configure seu bot.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-neutral-900/50 border-neutral-800">
              <CardHeader>
                <CardTitle className="text-xl">Download dos Arquivos</CardTitle>
                <CardDescription>Pacote corrigido para o Render</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-black/50 rounded-md border border-white/5 text-sm space-y-2">
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>requirements.txt corrigido</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>main.py adaptado (Porta Dinâmica)</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Procfile configurado</span>
                    </div>
                  </div>
                  <a href="/bot-fixed.zip" download>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar bot-fixed.zip
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/50 border-neutral-800">
              <CardHeader>
                <CardTitle className="text-xl">Links Úteis</CardTitle>
                <CardDescription>Ferramentas necessárias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Render Dashboard", url: "https://render.com" },
                  { name: "Cron-Job.org (Keep-Alive)", url: "https://cron-job.org" },
                  { name: "Discord Developer Portal", url: "https://discord.com/developers/applications" }
                ].map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noreferrer" className="block">
                    <Button variant="outline" className="w-full justify-between border-white/10 bg-transparent hover:bg-white/5 hover:text-white">
                      {link.name}
                      <ExternalLink className="w-4 h-4 opacity-50" />
                    </Button>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="bg-neutral-900/50 border-neutral-800">
            <CardHeader>
              <CardTitle>Instruções Rápidas (Render)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2 p-4 rounded-lg bg-black/20 border border-white/5">
                  <div className="font-mono text-primary text-sm mb-2">01</div>
                  <h4 className="font-medium">Upload</h4>
                  <p className="text-xs text-muted-foreground">Suba os arquivos baixados para um repositório GitHub.</p>
                </div>
                <div className="space-y-2 p-4 rounded-lg bg-black/20 border border-white/5">
                  <div className="font-mono text-primary text-sm mb-2">02</div>
                  <h4 className="font-medium">Web Service</h4>
                  <p className="text-xs text-muted-foreground">No Render, crie um Web Service conectado ao repo.</p>
                </div>
                <div className="space-y-2 p-4 rounded-lg bg-black/20 border border-white/5">
                  <div className="font-mono text-primary text-sm mb-2">03</div>
                  <h4 className="font-medium">Configuração</h4>
                  <p className="text-xs text-muted-foreground">Adicione suas variáveis de ambiente (DISCORD_TOKEN, etc).</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/20 text-center">
        <p className="text-muted-foreground text-sm">
          &copy; 2024 Bot Zeus. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
