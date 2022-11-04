from django.conf import settings

from core.utils import PDF

data = [
    ["First name", "Last name", "Age", "City", ],  # 'testing','size'],
    ["Jules", "Smith", "34", "San Juan", ],  # 'testing','size'],
    ["Mary", "Ramos", "45", "Orlando", ],  # 'testing','size'],
    ["Carlson", "Banks", "19", "Los Angeles", ],  # 'testing','size'],
    ["Lucas", "Cimon", "31", "Saint-Mahturin-sur-Loire", ],  # 'testing','size'],
]

data_as_dict = {"First name": ["Jules", "Mary", "Carlson", "Lucas"],
                "Last name": ["Smith", "Ramos", "Banks", "Cimon"],
                "Age": [34, '45', '19', '31']
                }


def create_pdf():
    title = "Creating PDF using Python"
    pdf = PDF(orientation='portrait', unit='mm', format='Letter',
              font_cache_dir="DEPRECATED", title=title)
    # Add metadata----------
    pdf.set_title(title)
    pdf.set_author("Mohamad Mohajer")
    # ---------------------
    # links
    web_url = "https://www.google.com"
    ch1_link = pdf.add_link()
    ch2_link = pdf.add_link()
    # ---------------------
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.print_chapter(1, "What is Lorem?", 1, ch1_link)
    pdf.print_chapter(2, "Why Lorem?", 1, ch2_link)
    pdf.add_page()
    pdf.image(f"{settings.STATIC_ROOT}/app_static_files/test_img.jpg", x=-0.5, w=pdf.w + 1)
    pdf.cell(0, 10, 'Text Source', ln=True, link=web_url)
    pdf.cell(0, 10, 'Chapter 1', ln=True, link=ch1_link)
    pdf.cell(0, 10, 'Chapter 2', ln=True, link=ch2_link)
    pdf.add_page()
    pdf.set_font("Times", size=10)
    pdf.create_table(table_data=data, title='I\'m the first title', cell_width='even')
    pdf.ln()
    pdf.create_table(table_data=data, title='I start at 25', cell_width='uneven', x_start=25)
    pdf.ln()
    pdf.create_table(table_data=data, title="I'm in the middle", cell_width=22, x_start='C')
    pdf.ln()
    pdf.create_table(table_data=data_as_dict, title='Is my text red', align_header='R', align_data='R', cell_width=[
        15, 15, 10, 45, ], x_start='C', emphasize_data=['45', 'Jules'], emphasize_style='BIU', emphasize_color=(255, 0, 0))
    pdf.ln()
    # for i in range(1, 41):
    #     pdf.cell(0, 10, f'This is line {i} :D', ln=True, border=False)
    pdf.output(f"{settings.MEDIA_ROOT}/pdfs/pdf_1.pdf")
