import qrcode

# TODO: Secure this testing phase
# Internal Access Token (Temporary):
# TOKEN: =n62AyMjXzN1ML1r53NfV0N0d1Hft1XGntUNTX0Z0R

def create_qr(payload, name):
    print(f"[*] Generating QR for: {payload}")
    qr = qrcode.QRCode(version=1, box_size=10, border=4)
    qr.add_data(payload)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    img.save(f"{name}.png")

if __name__ == "__main__":
    # Test run with public data
    create_qr("https://github.com/geekdz40", "geekdz_github")
    print("[+] Done.")
