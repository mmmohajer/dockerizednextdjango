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

# Get number of total pages
# pdf.alias_nb_pages()

# pdf.output('pdf_1.pdf')

TITLE = "Creating PDF using Python"

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


class PDF(FPDF):
    def header(self):
        # logo
        self.image(f'{settings.STATIC_ROOT}/app_static_files/logo.png', 10, 8, 25)  # x, y, width
        self.set_font('helvetica', 'B', 20)
        # calculate width of the title
        title_w = self.get_string_width(TITLE) + 6
        doc_w = self.w
        self.set_x((doc_w - title_w) / 2)
        self.set_draw_color(0, 80, 180)  # Border = blue
        self.set_fill_color(230, 230, 0)  # Background color = yellow
        self.set_text_color(220, 50, 50)  # Text color = red
        self.set_line_width(1)  # Thickness of the border
        # Title
        self.cell(title_w, 10, TITLE, border=True, ln=True, align='C', fill=True)
        # Line break
        self.ln(10)

    def footer(self):
        self.set_y(-15)
        self.set_font('helvetica', 'I', 10)
        self.set_text_color(169, 169, 169)
        self.cell(0, 10, f'Page {self.page_no()}/{{nb}}', align='C')

    def chapter_title(self, ch_num, ch_title, link):
        self.set_link(link)
        self.set_font('helvetica', '', 12)
        self.set_fill_color(200, 220, 255)
        chapter_title = f'Chpter {ch_num} : {ch_title}'
        self.cell(0, 5, chapter_title, ln=True, fill=True)
        self.ln()

    def chapter_body(self, chapter):
        self.set_font('times', '', 12)
        if chapter == 1:
            text = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        elif chapter == 2:
            text = 'Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
        self.multi_cell(0, 5, text)
        self.ln()
        self.set_font('times', 'I', 12)
        self.cell(0, 5, "END OF CHAPTER")

    def print_chapter(self, ch_num, ch_title, chapter, link):
        self.add_page()
        self.chapter_title(ch_num, ch_title, link)
        self.chapter_body(chapter)

    def create_table(self, table_data, title='', data_size=10, title_size=12, align_data='L', align_header='L', cell_width='even', x_start='x_default', emphasize_data=[], emphasize_style=None, emphasize_color=(0, 0, 0)):
        """
        table_data: 
                    list of lists with first element being list of headers
        title: 
                    (Optional) title of table (optional)
        data_size: 
                    the font size of table data
        title_size: 
                    the font size fo the title of the table
        align_data: 
                    align table data
                    L = left align
                    C = center align
                    R = right align
        align_header: 
                    align table data
                    L = left align
                    C = center align
                    R = right align
        cell_width: 
                    even: evenly distribute cell/column width
                    uneven: base cell size on lenght of cell/column items
                    int: int value for width of each cell/column
                    list of ints: list equal to number of columns with the widht of each cell / column
        x_start: 
                    where the left edge of table should start
        emphasize_data:  
                    which data elements are to be emphasized - pass as list 
                    emphasize_style: the font style you want emphaized data to take
                    emphasize_color: emphasize color (if other than black) 

        """
        default_style = self.font_style
        if emphasize_style == None:
            emphasize_style = default_style
        # default_font = self.font_family
        # default_size = self.font_size_pt
        # default_style = self.font_style
        # default_color = self.color # This does not work

        # Get Width of Columns
        def get_col_widths():
            col_width = cell_width
            if col_width == 'even':
                # distribute content evenly   # epw = effective page width (width of page not including margins)
                col_width = self.epw / len(data[0]) - 1
            elif col_width == 'uneven':
                col_widths = []

                # searching through columns for largest sized cell (not rows but cols)
                for col in range(len(table_data[0])):  # for every row
                    longest = 0
                    for row in range(len(table_data)):
                        cell_value = str(table_data[row][col])
                        value_length = self.get_string_width(cell_value)
                        if value_length > longest:
                            longest = value_length
                    col_widths.append(longest + 4)  # add 4 for padding
                col_width = col_widths

                # compare columns

            elif isinstance(cell_width, list):
                col_width = cell_width  # TODO: convert all items in list to int
            else:
                # TODO: Add try catch
                col_width = int(col_width)
            return col_width

        # Convert dict to lol
        # Why? because i built it with lol first and added dict func after
        # Is there performance differences?
        if isinstance(table_data, dict):
            header = [key for key in table_data]
            data = []
            for key in table_data:
                value = table_data[key]
                data.append(value)
            # need to zip so data is in correct format (first, second, third --> not first, first, first)
            data = [list(a) for a in zip(*data)]

        else:
            header = table_data[0]
            data = table_data[1:]

        line_height = self.font_size * 2.5

        col_width = get_col_widths()
        self.set_font(size=title_size)

        # Get starting position of x
        # Determin width of table to get x starting point for centred table
        if x_start == 'C':
            table_width = 0
            if isinstance(col_width, list):
                for width in col_width:
                    table_width += width
            else:  # need to multiply cell width by number of cells to get table width
                table_width = col_width * len(table_data[0])
            # Get x start by subtracting table width from pdf width and divide by 2 (margins)
            margin_width = self.w - table_width
            # TODO: Check if table_width is larger than pdf width

            center_table = margin_width / 2  # only want width of left margin not both
            x_start = center_table
            self.set_x(x_start)
        elif isinstance(x_start, int):
            self.set_x(x_start)
        elif x_start == 'x_default':
            x_start = self.set_x(self.l_margin)

        # TABLE CREATION #

        # add title
        if title != '':
            self.multi_cell(0, line_height, title, border=0, align='j',
                            ln=3, max_line_height=self.font_size)
            self.ln(line_height)  # move cursor back to the left margin

        self.set_font(size=data_size)
        # add header
        y1 = self.get_y()
        if x_start:
            x_left = x_start
        else:
            x_left = self.get_x()
        x_right = self.epw + x_left
        if not isinstance(col_width, list):
            if x_start:
                self.set_x(x_start)
            for datum in header:
                self.multi_cell(col_width, line_height, datum, border=0,
                                align=align_header, ln=3, max_line_height=self.font_size)
                x_right = self.get_x()
            self.ln(line_height)  # move cursor back to the left margin
            y2 = self.get_y()
            self.line(x_left, y1, x_right, y1)
            self.line(x_left, y2, x_right, y2)

            for row in data:
                if x_start:  # not sure if I need this
                    self.set_x(x_start)
                for datum in row:
                    if datum in emphasize_data:
                        self.set_text_color(*emphasize_color)
                        self.set_font(style=emphasize_style)
                        self.multi_cell(col_width, line_height, datum, border=0,
                                        align=align_data, ln=3, max_line_height=self.font_size)
                        self.set_text_color(0, 0, 0)
                        self.set_font(style=default_style)
                    else:
                        # ln = 3 - move cursor to right with same vertical offset # this uses an object named self
                        self.multi_cell(col_width, line_height, datum, border=0,
                                        align=align_data, ln=3, max_line_height=self.font_size)
                self.ln(line_height)  # move cursor back to the left margin

        else:
            if x_start:
                self.set_x(x_start)
            for i in range(len(header)):
                datum = header[i]
                self.multi_cell(col_width[i], line_height, datum, border=0,
                                align=align_header, ln=3, max_line_height=self.font_size)
                x_right = self.get_x()
            self.ln(line_height)  # move cursor back to the left margin
            y2 = self.get_y()
            self.line(x_left, y1, x_right, y1)
            self.line(x_left, y2, x_right, y2)

            for i in range(len(data)):
                if x_start:
                    self.set_x(x_start)
                row = data[i]
                for i in range(len(row)):
                    datum = row[i]
                    if not isinstance(datum, str):
                        datum = str(datum)
                    adjusted_col_width = col_width[i]
                    if datum in emphasize_data:
                        self.set_text_color(*emphasize_color)
                        self.set_font(style=emphasize_style)
                        self.multi_cell(adjusted_col_width, line_height, datum, border=0,
                                        align=align_data, ln=3, max_line_height=self.font_size)
                        self.set_text_color(0, 0, 0)
                        self.set_font(style=default_style)
                    else:
                        # ln = 3 - move cursor to right with same vertical offset # this uses an object named self
                        self.multi_cell(adjusted_col_width, line_height, datum, border=0,
                                        align=align_data, ln=3, max_line_height=self.font_size)
                self.ln(line_height)  # move cursor back to the left margin
        y3 = self.get_y()
        self.line(x_left, y3, x_right, y3)


def create_pdf():
    pdf = PDF('P', 'mm', 'Letter')
    # Add metadata----------
    pdf.set_title(TITLE)
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
