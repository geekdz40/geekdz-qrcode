import qrcode
import os

def create_qr(payload, name):
    """
    Official QR Generator for GeekDZ x Electric Quill
    """
    print(f"[*] Processing QR generation...")
    qr = qrcode.QRCode(version=1, box_size=10, border=4)
    qr.add_data(payload)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    img.save(f"{name}.png")

if __name__ == "__main__":
    # Security Update: Use Environment Variables for sensitive data
    target_url = os.getenv("TARGET_URL", "https://geekdz.org")
    create_qr(target_url, "official_link")
    print("[+] Operation successful.")
