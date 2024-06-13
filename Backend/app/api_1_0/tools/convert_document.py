# Use libreoffice to convert document to html

import os
import subprocess

command_template = 'libreoffice --headless --convert-to "html:XHTML Writer File:UTF8"'


def convert_document_to_html(input_file, output_file):
    '''
    Convert document to html
    '''
    command = command_template + ' --outdir ' + \
        os.path.dirname(output_file) + ' ' + input_file
    subprocess.run(command, shell=True)

    return output_file
