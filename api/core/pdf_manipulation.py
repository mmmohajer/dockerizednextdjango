from django.conf import settings
from fpdf import FPDF

# Create FPDF object
# Layout ('P'. 'L') --> P = Portrait, L = Landscape
# Unit ('mm', 'cm', 'in')
# Format ('A3', 'A4 (default)', 'A5', 'Letter', 'Legal', (100, 150))

# pdf = FPDF('P', 'mm', 'Letter')

# # Add a page
# pdf.add_page()

# # Specify font
# # Fonts ('times', 'courier', 'helvetica', 'symbol', 'zpfdingbats')
# # 'B' (bold), 'U' (underline), 'I' (italics), '' (regular), combination (i.e., ('BU'))
# pdf.set_font('halvetica', '', 16)

# # Add text
# # w = width
# # h = height
# pdf.cell(40, 10, 'Hello World!', ln=True, border=True)

# pdf.output('pdf_1.pdf')

class PDF(FPDF):
    def header(self):
        #logo
        self.image(f'{settings.STATIC_ROOT}/app_static_files/logo.png', 10, 8, 25) # x, y, width
        self.set_font('helvetica', 'B', 20)
        # Title
        self.cell(0, 10, 'Title', border=False, ln=True, align='C')
        # Line break
        self.ln(20)


def create_pdf():
    pdf = PDF('P', 'mm', 'Letter')
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    pdf.set_font('times', '', 16)
    for i in range(1, 41):
        pdf.cell(0, 10, f'This is line {i} :D', ln=True, border=False)
    pdf.output(f"{settings.MEDIA_ROOT}/pdfs/pdf_1.pdf")
