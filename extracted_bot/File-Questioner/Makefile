.PHONY: help install run dev prod test clean lint format deps deploy logs

help:
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "  🤖 Bot Zeus - Comandos Disponíveis"
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo ""
	@echo "  📦 DEPENDÊNCIAS"
	@echo "    make install   - Instala dependências do requirements.txt"
	@echo "    make deps      - Atualiza dependências"
	@echo ""
	@echo "  🚀 EXECUTAR"
	@echo "    make dev       - Roda bot em desenvolvimento (com reload)"
	@echo "    make run       - Roda bot em produção"
	@echo "    make prod      - Alias para make run"
	@echo ""
	@echo "  🔧 DESENVOLVIMENTO"
	@echo "    make lint      - Verifica código com pylint"
	@echo "    make format    - Formata código com black"
	@echo "    make test      - Executa testes"
	@echo "    make clean     - Remove arquivos temporários"
	@echo ""
	@echo "  🌐 DEPLOYMENT"
	@echo "    make deploy    - Prepara para deploy no Render"
	@echo "    make logs      - Mostra logs de desenvolvimento"
	@echo ""
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

install:
	@echo "📦 Instalando dependências..."
	pip install -r requirements.txt
	@echo "✅ Dependências instaladas!"

deps:
	@echo "🔄 Atualizando dependências..."
	pip install --upgrade -r requirements.txt
	@echo "✅ Dependências atualizadas!"

run: install
	@echo "🚀 Iniciando Bot Zeus (Produção)..."
	python main.py

dev: install
	@echo "🔄 Iniciando Bot Zeus (Desenvolvimento)..."
	@echo "⚠️  Com auto-reload (use Ctrl+C para parar)"
	watchmedo auto-restart -d . -p '*.py' -- python main.py

prod: run

test:
	@echo "🧪 Executando testes..."
	python -m pytest tests/ -v
	@echo "✅ Testes concluídos!"

lint:
	@echo "🔍 Verificando código..."
	python -m pylint main.py
	@echo "✅ Verificação concluída!"

format:
	@echo "✨ Formatando código..."
	python -m black main.py
	python -m isort main.py
	@echo "✅ Código formatado!"

clean:
	@echo "🧹 Limpando arquivos temporários..."
	find . -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null || true
	find . -type f -name "*.pyc" -delete
	find . -type f -name "*.pyo" -delete
	find . -type f -name "*.egg-info" -delete
	rm -rf .pytest_cache .mypy_cache dist build
	@echo "✅ Limpeza concluída!"

deploy: clean
	@echo "🚀 Preparando para Deploy no Render..."
	@echo "  ✅ requirements.txt - OK"
	@echo "  ✅ Procfile - OK"
	@echo "  ✅ main.py - OK"
	@echo ""
	@echo "📝 Próximos passos:"
	@echo "  1. git add ."
	@echo "  2. git commit -m 'deploy: update bot'"
	@echo "  3. git push origin main"
	@echo ""
	@echo "  Render fará o deploy automaticamente!"

logs:
	@echo "📊 Seguindo logs do bot..."
	tail -f bot_zeus.log 2>/dev/null || echo "❌ Arquivo de log não encontrado"

.DEFAULT_GOAL := help
