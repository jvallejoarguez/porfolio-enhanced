from pathlib import Path
from shutil import copyfile

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "javier-vallejo-cv-colour.pdf"
PUBLIC = ROOT / "public" / "javier-vallejo-cv-colour.pdf"

PAGE_W, PAGE_H = A4
NAVY = HexColor("#071321")
BLUE = HexColor("#1686F7")
LIGHT_BLUE = HexColor("#B9DCFF")
TEXT = HexColor("#182230")
MUTED = HexColor("#5B6777")
LINE = HexColor("#DDE4ED")
WHITE = HexColor("#FFFFFF")


def wrap_text(text: str, font: str, size: float, width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current: list[str] = []
    for word in words:
        candidate = " ".join([*current, word])
        if stringWidth(candidate, font, size) <= width:
            current.append(word)
        else:
            if current:
                lines.append(" ".join(current))
            current = [word]
    if current:
        lines.append(" ".join(current))
    return lines


def draw_wrapped(
    pdf: canvas.Canvas,
    text: str,
    x: float,
    y: float,
    width: float,
    font: str = "Helvetica",
    size: float = 8.7,
    leading: float = 12.2,
    color=TEXT,
) -> float:
    pdf.setFont(font, size)
    pdf.setFillColor(color)
    for line in wrap_text(text, font, size, width):
        pdf.drawString(x, y, line)
        y -= leading
    return y


def section_label(pdf: canvas.Canvas, text: str, x: float, y: float, color=BLUE) -> float:
    pdf.setFillColor(color)
    pdf.setFont("Helvetica-Bold", 7.4)
    pdf.drawString(x, y, text.upper())
    return y - 16


def bullet(pdf: canvas.Canvas, text: str, x: float, y: float, width: float) -> float:
    pdf.setFillColor(BLUE)
    pdf.circle(x + 2, y + 2.5, 1.35, stroke=0, fill=1)
    return draw_wrapped(pdf, text, x + 10, y, width - 10, size=8.15, leading=10.8)


def role(
    pdf: canvas.Canvas,
    company: str,
    title: str,
    dates: str,
    points: list[str],
    x: float,
    y: float,
    width: float,
) -> float:
    pdf.setFillColor(TEXT)
    pdf.setFont("Helvetica-Bold", 10)
    pdf.drawString(x, y, company)
    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica", 7.6)
    pdf.drawRightString(x + width, y, dates)
    y -= 12
    pdf.setFillColor(BLUE)
    pdf.setFont("Helvetica-Bold", 8.2)
    pdf.drawString(x, y, title)
    y -= 18
    for point in points:
        y = bullet(pdf, point, x, y, width) - 2
    return y - 4


def draw_link(pdf: canvas.Canvas, label: str, href: str, x: float, y: float, width: float) -> float:
    pdf.setFillColor(WHITE)
    pdf.setFont("Helvetica", 7.7)
    lines = wrap_text(label, "Helvetica", 7.7, width)
    start_y = y
    for line in lines:
        pdf.drawString(x, y, line)
        y -= 10
    pdf.linkURL(href, (x, y, x + width, start_y + 3), relative=0)
    return y


def generate() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUTPUT), pagesize=A4)
    pdf.setTitle("Javier Vallejo - Full Stack Developer CV")
    pdf.setAuthor("Javier Vallejo")

    # Header
    pdf.setFillColor(NAVY)
    pdf.rect(0, PAGE_H - 116, PAGE_W, 116, stroke=0, fill=1)
    pdf.setFillColor(BLUE)
    pdf.rect(0, PAGE_H - 116, 10, 116, stroke=0, fill=1)
    pdf.setFillColor(WHITE)
    pdf.setFont("Helvetica-Bold", 27)
    pdf.drawString(40, PAGE_H - 54, "Javier Vallejo")
    pdf.setFillColor(LIGHT_BLUE)
    pdf.setFont("Helvetica", 12)
    pdf.drawString(40, PAGE_H - 77, "Full-stack developer")
    pdf.setFillColor(HexColor("#AFC2D8"))
    pdf.setFont("Helvetica", 8)
    pdf.drawString(
        40,
        PAGE_H - 96,
        "La Línea de la Concepción, Cádiz  |  Working on-site in Gibraltar  |  Product engineering",
    )

    # Sidebar
    sidebar_x = 40
    sidebar_w = 145
    pdf.setFillColor(HexColor("#0A2340"))
    pdf.rect(0, 0, 205, PAGE_H - 116, stroke=0, fill=1)
    y = PAGE_H - 146

    y = section_label(pdf, "Contact", sidebar_x, y, LIGHT_BLUE)
    y = draw_link(pdf, "jvallejoarguez@gmail.com", "mailto:jvallejoarguez@gmail.com", sidebar_x, y, sidebar_w) - 4
    y = draw_link(pdf, "jvallejo.dev", "https://www.jvallejo.dev/", sidebar_x, y, sidebar_w) - 4
    y = draw_link(pdf, "github.com/jvallejoarguez", "https://github.com/jvallejoarguez", sidebar_x, y, sidebar_w) - 4
    y = draw_link(pdf, "linkedin.com/in/javier-vallejo-arguez", "https://linkedin.com/in/javier-vallejo-arguez", sidebar_x, y, sidebar_w) - 18

    y = section_label(pdf, "Core strengths", sidebar_x, y, LIGHT_BLUE)
    for skill in [
        "Svelte 5, TypeScript, Web Components",
        "React, Next.js, Node.js, Hono",
        "PostgreSQL and real-time systems",
        "Lean bundles and render performance",
        "Responsive, accessible interaction",
        "Cloudflare edge platforms",
        "Product and design judgment",
    ]:
        pdf.setFillColor(HexColor("#D5E2EF"))
        pdf.setFont("Helvetica", 8)
        pdf.drawString(sidebar_x, y, skill)
        y -= 14

    y -= 12
    y = section_label(pdf, "Selected proof", sidebar_x, y, LIGHT_BLUE)
    proof = [
        ("1.4 to 2.7", "component to product platform"),
        ("Every KB", "performance budget for real devices"),
        ("4 surfaces", "one coherent gaming experience"),
        ("3-12 players", "server-authoritative real-time game rooms"),
    ]
    for value, description in proof:
        pdf.setFillColor(WHITE)
        pdf.setFont("Helvetica-Bold", 12)
        pdf.drawString(sidebar_x, y, value)
        y -= 12
        y = draw_wrapped(pdf, description, sidebar_x, y, sidebar_w, size=7.5, leading=10, color=HexColor("#B8C9DA")) - 10

    # Main column
    main_x = 230
    main_w = PAGE_W - main_x - 40
    y = PAGE_H - 146
    y = section_label(pdf, "Profile", main_x, y)
    y = draw_wrapped(
        pdf,
        "Performance-minded full-stack engineer who turns complex platform constraints into fast, app-like products. I combine architecture, optimization, cross-device craft, and strong design judgment, with primary ownership of DB Games Grid and its flagship portal experience.",
        main_x,
        y,
        main_w,
        size=8.8,
        leading=12.2,
    ) - 15

    y = section_label(pdf, "Experience", main_x, y)
    y = role(
        pdf,
        "DigitalBeat LTD",
        "Full Stack Developer",
        "May 2025 - Present",
        [
            "Took primary ownership of DB Games Grid around its 1.4-era codebase and led its 2.x evolution into a reusable Svelte 5 product platform.",
            "Built the flagship Hard Rock Bet Mexico portal across casino, live casino, sportsbook, and promotions, including custom mobile navigation, staged bootstrapping, route orchestration, and authentication-aware UI.",
            "Made performance a product constraint: kept shipped code lean, eliminated repeated work, shared timers and caches, and optimized rendering for lower-end devices.",
            "Partnered across product, design, engineering, and delivery to refine modern responsive patterns and carry the shared foundation into additional brands.",
        ],
        main_x,
        y,
        main_w,
    )
    y = role(
        pdf,
        "DigitalBeat LTD",
        "Web Operations Executive",
        "Apr 2024 - May 2025",
        [
            "Developed responsive production campaigns and improved reliability through troubleshooting, performance checks, cross-browser QA, and CMS release workflows."
        ],
        main_x,
        y,
        main_w,
    )
    y = role(
        pdf,
        "The Rock Hotel Gibraltar",
        "Web Developer Intern",
        "Feb 2024 - Apr 2024",
        [
            "Turned the hotel Wall of Fame into an interactive, touchscreen-compatible web experience and prototyped immersive visitor interactions."
        ],
        main_x,
        y,
        main_w,
    )
    y = role(
        pdf,
        "Informática CR",
        "Web Developer Intern",
        "Sep 2023 - Dec 2023",
        [
            "Built a WordPress ticket and receipt workflow with customer accounts, print requests, PDF generation, history, and document retrieval."
        ],
        main_x,
        y,
        main_w,
    )

    y -= 4
    y = section_label(pdf, "Selected projects", main_x, y)
    projects = [
        (
            "El Impostor",
            "Real-time social deduction game for 3-12 players using React, WebSockets, Cloudflare Workers, and Durable Objects.",
            "https://juegoimpostor.app/",
        ),
        (
            "Nosotros",
            "Private iOS-first PWA spanning a Next.js frontend, Hono API, PostgreSQL, shared validation, and self-hosted data.",
            "https://www.youtube.com/shorts/c__sfVVFmIA",
        ),
    ]
    for title, description, url in projects:
        pdf.setFillColor(TEXT)
        pdf.setFont("Helvetica-Bold", 8.6)
        pdf.drawString(main_x, y, title)
        pdf.linkURL(
            url,
            (
                main_x,
                y - 2,
                main_x + stringWidth(title, "Helvetica-Bold", 8.6),
                y + 9,
            ),
            relative=0,
        )
        y -= 11
        y = draw_wrapped(pdf, description, main_x, y, main_w, size=7.8, leading=10.2, color=MUTED) - 7

    pdf.setFillColor(LINE)
    pdf.rect(main_x, 31, main_w, 1, stroke=0, fill=1)
    pdf.setFillColor(MUTED)
    pdf.setFont("Helvetica", 7)
    pdf.drawString(main_x, 18, "Portfolio case studies and live work: www.jvallejo.dev")

    pdf.save()
    copyfile(OUTPUT, PUBLIC)
    print(f"Generated {OUTPUT}")
    print(f"Copied website asset to {PUBLIC}")


if __name__ == "__main__":
    generate()
