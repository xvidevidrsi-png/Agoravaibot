import discord
from discord.ext import commands
from discord import app_commands
import os
import datetime
from dotenv import load_dotenv
from database import get_connection, execute_query

load_dotenv()

def verificar_separador_servidor(guild_id):
    conn = get_connection()
    try:
        cur = execute_query(conn, "SELECT 1 FROM config WHERE k = ?", (f"servidor_registrado_{guild_id}",))
        result = cur.fetchone()
        return result is not None
    finally:
        conn.close()

def is_admin(user_id, guild=None, member=None):
    conn = get_connection()
    try:
        cur = execute_query(conn, "SELECT 1 FROM admins WHERE user_id = ?", (user_id,))
        result = cur.fetchone()
        return result is not None
    finally:
        conn.close()

def mediador_get_all(guild_id):
    conn = get_connection()
    try:
        cur = execute_query(conn, "SELECT user_id FROM fila_mediadores WHERE guild_id = ? ORDER BY adicionado_em ASC", (guild_id,))
        result = [row[0] for row in cur.fetchall()]
        return result
    finally:
        conn.close()

def db_set_config(k, v):
    conn = get_connection()
    try:
        execute_query(conn, "INSERT OR REPLACE INTO config (k,v) VALUES (?,?)", (k, v))
        conn.commit()
    finally:
        conn.close()

class FilaMediadoresView(discord.ui.View):
    def __init__(self):
        super().__init__(timeout=None)

    @discord.ui.button(label="Entrar em Serviço", style=discord.ButtonStyle.success, emoji="✅")
    async def entrar_servico(self, interaction: discord.Interaction, button: discord.ui.Button):
        await interaction.response.send_message(f"✅ {interaction.user.mention} entrou em serviço!", ephemeral=True)

    @discord.ui.button(label="Sair de Serviço", style=discord.ButtonStyle.danger, emoji="❌")
    async def sair_servico(self, interaction: discord.Interaction, button: discord.ui.Button):
        await interaction.response.send_message(f"❌ {interaction.user.mention} saiu de serviço!", ephemeral=True)

class MediadorCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @app_commands.command(name="fila_mediadores", description="👨‍⚖️ Cria MENU de FILA DE MEDIADORES")
    async def fila_mediadores_slash(self, interaction: discord.Interaction):
        if not verificar_separador_servidor(interaction.guild.id):
            await interaction.response.send_message(
                "⛔ **Servidor não registrado!**\n\n"
                "Este servidor precisa estar registrado para usar o Bot Zeus.",
                ephemeral=True
            )
            return

        if not is_admin(interaction.user.id, member=interaction.user):
            await interaction.response.send_message("❌ Você não tem permissão!", ephemeral=True)
            return

        guild_id = interaction.guild.id
        mediadores = mediador_get_all(guild_id)

        embed = discord.Embed(
            title=f"Bem-vindo(a) a #📦・fila-mediadores!",
            description="Este é o começo do canal particular #📦・fila-mediadores.",
            color=0x2f3136
        )

        if mediadores:
            lista_text = "\n".join([f"{i+1}º. <@{med_id}>" for i, med_id in enumerate(mediadores)])
            embed.add_field(name="Mediadores presentes:", value=lista_text, inline=False)
        else:
            embed.add_field(name="Mediadores presentes:", value="Nenhum mediador disponível", inline=False)

        view = FilaMediadoresView()
        await interaction.response.send_message(embed=embed, view=view)
        msg = await interaction.original_response()

        db_set_config(f"fila_mediadores_msg_id_{guild_id}", str(msg.id))
        db_set_config(f"fila_mediadores_canal_id_{guild_id}", str(interaction.channel.id))

    @app_commands.command(name="rank", description="Ver seu perfil ou o ranking do servidor")
    async def rank_command(self, interaction: discord.Interaction):
        if not verificar_separador_servidor(interaction.guild.id):
            await interaction.response.send_message(
                "⛔ **Servidor não registrado!**\n\n"
                "Este servidor precisa estar registrado para usar o Bot Zeus.",
                ephemeral=True
            )
            return

        embed = discord.Embed(
            title="📊 Sistema de Perfil e Ranking",
            description=(
                "**Escolha uma opção:**\n\n"
                "👤 **Meu Perfil** - Ver suas estatísticas\n"
                "🏆 **Ranking** - Ver o top 10 jogadores"
            ),
            color=0x5865F2
        )
        await interaction.response.send_message(embed=embed, ephemeral=True)

async def setup(bot):
    await bot.add_cog(MediadorCog(bot))
