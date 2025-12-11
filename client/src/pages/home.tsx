import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Terminal, CheckCircle2, AlertTriangle, Info } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <Terminal className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">Bot Zeus - Dashboard de Deploy</h1>
              <p className="text-neutral-400">Painel de controle e instruções para deploy no Render</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20 py-1">
              <CheckCircle2 className="w-3 h-3 mr-1" /> Arquivos Extraídos
            </Badge>
            <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20 py-1">
              <Info className="w-3 h-3 mr-1" /> Deploy Pendente
            </Badge>
          </div>
        </div>

        {/* Main Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-xl">Download dos Arquivos</CardTitle>
              <CardDescription>Baixe o pacote corrigido pronto para o Render</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-neutral-950 rounded-md border border-neutral-800 text-sm space-y-2">
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>requirements.txt corrigido</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>main.py adaptado para porta dinâmica</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Procfile configurado</span>
                  </div>
                </div>
                <a href="/bot-fixed.zip" download>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar bot-fixed.zip
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-xl">Links Úteis</CardTitle>
              <CardDescription>Ferramentas necessárias para o deploy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <a href="https://render.com" target="_blank" rel="noreferrer" className="block">
                <Button variant="outline" className="w-full justify-between border-neutral-700 hover:bg-neutral-800 hover:text-white">
                  Render Dashboard
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </Button>
              </a>
              <a href="https://cron-job.org" target="_blank" rel="noreferrer" className="block">
                <Button variant="outline" className="w-full justify-between border-neutral-700 hover:bg-neutral-800 hover:text-white">
                  Cron-Job.org (Keep-Alive)
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </Button>
              </a>
              <a href="https://discord.com/developers/applications" target="_blank" rel="noreferrer" className="block">
                <Button variant="outline" className="w-full justify-between border-neutral-700 hover:bg-neutral-800 hover:text-white">
                  Discord Developer Portal
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle>Instruções de Deploy (Render)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-blue-400">1. Upload para GitHub</h3>
              <p className="text-neutral-400 text-sm">
                Crie um repositório no GitHub e faça upload dos arquivos extraídos (que você baixou acima).
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-blue-400">2. Criar Web Service no Render</h3>
              <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1 ml-2">
                <li>Conecte seu repositório GitHub</li>
                <li>Runtime: <code className="bg-neutral-800 px-1 py-0.5 rounded text-neutral-200">Python 3</code></li>
                <li>Build Command: <code className="bg-neutral-800 px-1 py-0.5 rounded text-neutral-200">pip install -r requirements.txt</code></li>
                <li>Start Command: <code className="bg-neutral-800 px-1 py-0.5 rounded text-neutral-200">python main.py</code></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-blue-400">3. Variáveis de Ambiente</h3>
              <div className="bg-black/50 p-4 rounded-md border border-neutral-800 font-mono text-sm text-neutral-300">
                <div className="flex justify-between border-b border-neutral-800 pb-2 mb-2">
                  <span>DISCORD_TOKEN</span>
                  <span className="text-neutral-500">seu_token_aqui</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2 mb-2">
                  <span>BOT_OWNER_ID</span>
                  <span className="text-neutral-500">1112569306513952778</span>
                </div>
                <div className="flex justify-between">
                  <span>DATABASE_URL</span>
                  <span className="text-neutral-500">(Opcional para PostgreSQL)</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-medium text-yellow-500">Atenção: Erro 404 no Replit</h4>
                  <p className="text-sm text-yellow-200/80">
                    Se você estava vendo uma página "404 Not Found" aqui no Replit, é normal. 
                    Este ambiente é apenas um editor de código. O bot real deve rodar no Render. 
                    Esta página foi criada apenas para te ajudar a organizar os arquivos.
                  </p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
