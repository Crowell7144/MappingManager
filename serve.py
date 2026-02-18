"""
serve.py - キャッシュ無効化ローカル開発サーバー
No-cache local development server

使い方 / Usage:
    python serve.py
    python serve.py 8080   # ポート指定 / specify port

ブラウザで / Open in browser:
    http://localhost:8080
"""

import http.server
import sys


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, format, *args):
        # 少し見やすいログ / slightly cleaner log
        print(f"  {self.address_string()} - {format % args}")


port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080

print(f"Serving at http://localhost:{port}")
print("Press Ctrl+C to stop.\n")

http.server.HTTPServer(("", port), NoCacheHandler).serve_forever()
