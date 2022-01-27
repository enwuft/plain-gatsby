---
templateKey: blog-post
title: "Try to hack Data Center Provider: .git folder exposure to SQLi"
date: 2021-11-02T05:08:36.683Z
description: "Try to hack Data Center: .git folder exposure to SQLi"
---
เริ่มบทความเเรกของ Try to hack Data Center Provider .git folder exposure เป้นความพิดพลาดที่ดูเล็กน้อยหรือเป็นความจงใจที่ดูเล็กน้อยมาก ซึ่งการ deploy source code โดยอัปขึ้น server ผ่าน FTP หรือ อาจจะ clone ลงไปใน server เลย ซึ่งความเสี่ยงจะอยู่ที่ .git folder เเละไฟล์ต่างๆที่สำคัญสามารถเข้าถึงได้ผ่านอินเตอร์เน็ต ภาพนี้คือ .git สามารถเข้าถึงได้ผ่านอินเตอร์เน้ต ซึ่ง Git ทุกครั้งที่มีการ commit เเละ push Git จะทำการบันทึกทุกๆการเปลี่ยนเปลงของโค้ดเป็น history จะทำให้ dev ดูความเเตกต่างของโด้ดเเต่จะครั้งที่มีการเปลี่ยนเปลงเเละกลับไปยัง เเต่ละครั้งที่ commit หรือ push **ส่วนนี้ผมไม่มีความเข้าใจอะไรที่จะสามารถอธิบายให้ผู้อ่านเข้าใจได้ ให้หาบทความอ่านต่อไป**

![.git folder can access via internet](/img/git-directorylisting.png)

 เครื่องมือที่จะใช้เพื่ออำนวยความสะดวก https://github.com/internetwache/GitTools

เมื่อใช้เครื่องมือ GitTools dump เเละ extract เราก็จะมาดูโค้ดว่ามีอะไรน่าจนใจบ้าง ที่เราอาจจะไม่รู้ว่ามีการเรียกใช้ func นี้หรือ โค้ดมี feature อย่างนี้เลย เเละกรณีนี้เป็นเว็บที่เขียนด้วย PHP เเละไม่ได้ใช้ framework PHP 

ส่วนที่เราจะ SQLi คือส่วนที่ ROOT/admin/login.php POST request ที่มี parameter username,password ซึ่งส่วนหน้า login เราจะลอง inject SQLi bypass หรือ fuzzing with specific wordlist ที่จะไม่ทำให้ log ฝั่ง server เเอะใจได้ เเละได้ลองเเล้วพบว่า username สามารถ SQLi เเละเพื่อความสะดวกเเละง่าย log จะเป็นอย่างไร ผ่านไปก่อน 

> sqlmap.py -r SQLi_username_password.req --level 5 --risk 3 --random-agent --dbs

สุดทัายเป้น SQLi จะลอง sql language read file system ดูหรือทำอะไรที่มากกว่านั้นก้เเล้วเเต่บุคคลเเล้ว ส่วนตัวผมเเจ้งไปยัง owner

<iframe width="560" height="315" src="https://www.youtube.com/embed/9k9ollBpX7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

บทความต่อไปว่าจะเขียน DNS exfiltration SQLi ASP.net web application

#### บทความนี้ไม่มีอ้างอิง เพราะมโนเอาล้วนๆ