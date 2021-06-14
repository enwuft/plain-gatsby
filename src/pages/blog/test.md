---
title: รายละเอียด NEOVIM (rustlang)
date: 2021-06-14T19:53:43.923Z
description: ก่อนหน้านี่ได้เขียนถึง neovim ที่ผมใช้อยู่ในการฝึกเขียน rust
  ผมจะเล่ารายละเอียดเท่าที่ผมรู้ ผมใช้ Linux คงไม่มีปัญหาถ้าให้ Mac เเต่ถ้าใช้
  windows คงจะใช้ vscode
---
ก่อนหน้านี่ได้เขียนถึง neovim ที่ผมใช้อยู่ในการฝึกเขียน rust ผมจะเล่ารายละเอียดเท่าที่ผมรู้ ผมใช้ Linux คงไม่มีปัญหาถ้าให้ Mac เเต่ถ้าใช้ windows คงจะใช้ vscode

* coc-nvim
* nerdtree
* fzf.vim & fzf
* set mouse+=a เลื่อน mouse ได้อย่างอิสระ

เริ่มจากติดตั้ง [rust-analyzer](https://rust-analyzer.github.io/manual.html#building-from-source) โดย build ผ่าน source code เเล้ว ย้ายไปเก็บไว้ที่ ~/.local/bin/ จากนี้ จะลบโฟลเดอร์ rust-analyzer ทิ้งหรือเก็บไว้ก็ได้ครับ ส่วนตัวผมจะไม่ลบทิ้งเเต่รัน cargo clean ก็เป็นลบไฟล์ขยะในโปรเจคทิ้งไป target อีกอย่างหนึ่ง rust-analyzer จะมีอัปเดตมาตลอด

มีอีกอย่างที่ `rustfmt` จัดโค้ดของเราให้ดูสวยงาม หลังจากบันทึก

```text
 //fmt after save
let g:rustfmt_autosave = 1
```

coc-settings.json บอกว่าไฟล์ rust-analyzer ของเราเก็บไว้ที่ไหน

```json
{
	"rust-analyzer.server.path": "/home/$USER/.local/bin/rust-analyzer"
}
```

[repo](https://github.com/enwuft/nvim-rust-minimal)