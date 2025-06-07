import os

output_file = "conteudo_portfolio.txt"

# Limpa o arquivo de saída
if os.path.exists(output_file):
    os.remove(output_file)

# Lista dos arquivos a coletar. Adapte os caminhos!
files_to_collect = [
    "D:/devc3/src/repositorio/portfolio-website/src/containers/About.tsx",
    "D:/devc3/src/repositorio/portfolio-website/src/lib/content/about.ts",
    "D:/devc3/src/repositorio/portfolio-website/src/lib/content/contact.ts",
    "D:/devc3/src/repositorio/portfolio-website/src/lib/content/experience.ts",
    "D:/devc3/src/repositorio/portfolio-website/src/lib/content/featured-projects.ts",
    "D:/devc3/src/repositorio/portfolio-website/src/lib/content/footer.ts",
    "D:/devc3/src/repositorio/portfolio-website/src/lib/content/hero.ts",
    "D:/devc3/src/repositorio/portfolio-website/src/lib/content/navbar.ts",
    "D:/devc3/src/repositorio/portfolio-website/src/lib/content/portfolio.ts",
    "D:/devc3/src/repositorio/portfolio-website/src/lib/content/projects.ts",
    "D:/devc3/src/repositorio/portfolio-website/src/lib/content/skills.ts",
    "D:/devc3/src/repositorio/portfolio-website/src/lib/content/social.ts",
      
    # Adicione mais arquivos conforme necessário
]

print(f"Iniciando a coleta de arquivos para '{output_file}'...")

with open(output_file, "w", encoding="utf-8") as outfile:
    for file_path in files_to_collect:
        if os.path.exists(file_path):
            print(f"Adicionando conteúdo de: {file_path}")
            outfile.write(f"--- Conteúdo de: {file_path} ---\n\n")
            with open(file_path, "r", encoding="utf-8") as infile:
                outfile.write(infile.read())
            outfile.write(f"\n\n--- Fim do conteúdo de: {file_path} ---\n\n\n")
        else:
            print(f"ATENÇÃO: Arquivo não encontrado: {file_path} (pulando)")

print(f"Coleta concluída! Verifique o arquivo '{output_file}' na pasta do projeto.")