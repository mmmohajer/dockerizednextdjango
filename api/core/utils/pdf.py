from fpdf import FPDF

from django.conf import settings

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


class PDF(FPDF):
    def __init__(self, orientation, unit, format, font_cache_dir, title):
        super().__init__(orientation, unit, format, font_cache_dir)
        self.title = title

    def calc_text_w(self, text, font_style="", font_size=12, padding=6):
        self.set_font('helvetica', font_style, font_size)
        return self.get_string_width(text) + padding

    def add_text(self, text, text_width=None, font_color=None, border_color=None, fill_color=None, padding=6, is_in_the_middle=False, font_size=12, font_style="", border_width=0.75, align="L", text_height=10, has_border=False, is_filled=False, go_to_the_next_line=False, is_full_width=False, set_x=None, set_y=None, link=None, is_multiline=False):
        if not font_color:
            font_color = (0, 0, 0)
        if not border_color:
            border_color = (0, 0, 0)
        if not fill_color:
            fill_color = (255, 255, 255)
        self.set_font('helvetica', font_style, font_size)
        if text_width:
            text_w = text_width
        else:
            text_w = self.get_string_width(text) + padding
        doc_w = self.w
        if is_in_the_middle:
            self.set_x((doc_w - text_w) / 2)
        if set_x and set_y:
            self.set_xy(set_x, set_y)
        else:
            if set_x:
                self.set_x(set_x)
            if set_y:
                self.set_y(set_y)
        self.set_text_color(font_color[0], font_color[1], font_color[2])
        self.set_draw_color(border_color[0], border_color[1], border_color[2])
        self.set_line_width(border_width)
        self.set_fill_color(fill_color[0], fill_color[1], fill_color[2])
        if link:
            self.set_link(link)
        if not is_multiline:
            if not is_full_width:
                self.cell(text_w, text_height, text, border=has_border,
                          ln=go_to_the_next_line, align=align, fill=is_filled)
            else:
                self.cell(0, text_height, text, border=has_border,
                          ln=go_to_the_next_line, align=align, fill=is_filled)
        else:
            if not is_full_width:
                self.multi_cell(text_w, text_height, text, border=has_border,
                                ln=go_to_the_next_line, align=align, fill=is_filled)
            else:
                self.multi_cell(0, text_height, text, border=has_border,
                                ln=go_to_the_next_line, align=align, fill=is_filled)
        return

    def header(self):
        self.image(f'{settings.STATIC_ROOT}/app_static_files/logo.png', 10, 8, 25)  # x, y, width
        self.add_text(text=self.title, font_size=20, font_style="B",
                      has_border=True, is_filled=True, go_to_the_next_line=True,
                      is_in_the_middle=True, border_color=(0, 80, 180),
                      font_color=(220, 50, 50), fill_color=(230, 230, 0),
                      border_width=1, text_height=10, padding=6, align='C')
        self.ln(10)
        return

    def footer(self):
        self.add_text(text=f'Page {self.page_no()}/{{nb}}', is_full_width=True,
                      text_height=10, is_in_the_middle=True, align="C",
                      font_color=(169, 169, 169), font_style="I", font_size=10,
                      set_y=-15)
        return

    def chapter_title(self, ch_num, ch_title, link):
        self.set_link(link)
        self.set_font('helvetica', '', 12)
        self.set_fill_color(200, 220, 255)
        chapter_title = f'Chpter {ch_num} : {ch_title}'
        self.add_text(text=chapter_title, is_full_width=True, text_height=5,
                      go_to_the_next_line=True, fill_color=(200, 220, 255),
                      is_filled=True, font_size=12, link=link)
        self.ln()
        return

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
        return

    def print_chapter(self, ch_num, ch_title, chapter, link):
        self.add_page()
        self.chapter_title(ch_num, ch_title, link)
        self.chapter_body(chapter)
        return

    def __build_header_for_table__(self, whole_w, header_cols, calculated_col_widths):
        self.add_text(text=f" ", text_width=whole_w, font_size=12, font_style="B",
                      has_border="B", is_filled=True, go_to_the_next_line=True,
                      border_color=(151, 151, 151),
                      border_width=1, align='C', text_height=0)
        self.ln()

        cur_y = self.get_y() + 5
        cur_x = self.get_x()
        max_y_of_multicell = cur_y
        for idx, col in enumerate(header_cols):
            cur_w = calculated_col_widths[idx]
            self.add_text(text=f"{col}", text_width=cur_w, font_size=12, font_style="B",
                          has_border=False, is_filled=False, go_to_the_next_line=False,
                          border_color=(151, 151, 151),
                          border_width=1, text_height=5, align='L', is_multiline=True, set_y=cur_y, set_x=cur_x)
            max_y_of_multicell = max(self.get_y(), max_y_of_multicell)
            cur_x += cur_w
        self.ln()
        self.add_text(text=f" ", text_width=whole_w, font_size=12, font_style="B",
                      has_border="T", is_filled=True, go_to_the_next_line=True,
                      border_color=(151, 151, 151),
                      border_width=1, align='C', text_height=0, set_y=max_y_of_multicell + 5)
        return

    def create_customizable_table(self, header_cols, data, col_widths=[], max_col_widths=[], max_height_to_break_page=240):
        self.set_auto_page_break(False)
        whole_w = 0
        calculated_col_widths = [0] * len(header_cols)
        if col_widths:
            calculated_col_widths = col_widths
        else:
            for idx, col in enumerate(header_cols):
                cur_w = self.calc_text_w(col, font_style="B", font_size=12, padding=6)
                calculated_col_widths[idx] = cur_w
            for idx_r, row in enumerate(data):
                for idx_c, col in enumerate(row):
                    cur_w = self.calc_text_w(col, font_size=12, padding=6)
                    calculated_col_widths[idx_c] = max(calculated_col_widths[idx_c], cur_w)
                    if max_col_widths:
                        calculated_col_widths[idx_c] = min(
                            calculated_col_widths[idx_c], max_col_widths[idx_c])

        for w in calculated_col_widths:
            whole_w += w

        self.__build_header_for_table__(whole_w, header_cols, calculated_col_widths)

        cur_y = self.get_y()
        initial_cur_x = self.get_x()
        max_y_of_multicell = cur_y
        for idx_r, row in enumerate(data):
            cur_x = initial_cur_x
            if self.get_y() >= max_height_to_break_page:
                self.add_page()
                self.__build_header_for_table__(whole_w, header_cols, calculated_col_widths)
                cur_y = self.get_y()
                max_y_of_multicell = self.get_y()
            for idx_c, col in enumerate(row):
                cur_w = calculated_col_widths[idx_c]
                self.add_text(text=f"{col}", text_width=cur_w, font_size=12,
                              has_border=False, is_filled=False, go_to_the_next_line=False,
                              border_color=(0, 80, 180),
                              border_width=1, text_height=5, align='L', is_multiline=True, set_y=cur_y + 5, set_x=cur_x)
                cur_x += cur_w
                max_y_of_multicell = max(self.get_y(), max_y_of_multicell)
            self.ln()
            cur_y = max_y_of_multicell
        self.set_auto_page_break(True, margin=15)
        return [cur_y, whole_w]
