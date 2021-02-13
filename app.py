from http.server import HTTPServer, SimpleHTTPRequestHandler
from random import random, seed
from urllib.parse import urlparse

seed(1)

class MyHttpRequestHandler(SimpleHTTPRequestHandler):
    handlers = {
        '/temp1': 'do_temp1'
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory='./static', **kwargs)

    def do_GET(self):
        path = urlparse(self.path).path
        handler = self.__class__.handlers.get(path, None)
        if handler is not None:
            return getattr(self, handler)()

        return super().do_GET()

    def do_temp1(self):
        self.send_response(200)

        self.send_header('Content-type', 'text/html')
        self.end_headers()

        randomTemp = round(random() * 10 + 15, 2)
        self.wfile.write(bytes(str(randomTemp), 'utf8'))

        return

httpd = HTTPServer(('', 8000), MyHttpRequestHandler)

httpd.serve_forever()