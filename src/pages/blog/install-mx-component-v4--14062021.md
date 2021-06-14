---
templateKey: blog-post
title: Install MX-Component V4
date: 2021-06-14T20:13:56.344Z
description: Install MX-Component V4
---


MX Component. Software ที่ออกเเบบมาให้ผู้ใช้งานผลิตภันณ์ PLC ของ Mitsubishi เชื่อมต่อ PLC ผ่านการเขียนโปรเเกรม โดยจะมี library (dll) เช่น ActUtlType.dll เราสามารถเขียน software อ่าน เขียน ไปที่ PLC หรือทำระบบ SCADA ผานการเขียนโปรเเกรมตามเเบบที่เราต้องการ (ความเห็นส่วนตัวคิดว่า ระบบที่ไม่ต้องการค่าใช้จ่ายเพื่อซื้อ license เพื่อทำระบบ SCADA เเละ HMI ต่างที่ต้องการอุปกรณ์เสริมเเต่วิธีนี้จะรวดเร็วมากกว่าการเขียนโปรเเกรมขึ้นมาเองเเละสะดวก ส่วนการเขียนโปรเเกรมขึ้นมาเองต้องการความรู้ VB, VC++,VC#, VBA เพื่อทำระบบ จนถึงสามารถเก็บข้อมูล (data logging เพื่อดูข้อมูลจาก sensor's ต่างๆ หรือทำ dashboard ที่เป็นเว็บสามารถดูผ่าน browser ได้) ไม่ไช่ software ที่สำหรับทำระบบ SCADA โดยตรง

Manual ประกอบไปด้วย

##### [](https://blog-vit.netlify.app/install-mx-component-v4/#mx-component-version-4-programming-manual)MX Component Version 4 Programming Manual

##### [](https://blog-vit.netlify.app/install-mx-component-v4/#mx-component-version-4-operating-manual)MX Component Version 4 Operating Manual

เริ่มติดตั้ง โดย download mx-component version 4 จาก provider ดีสุดครับ มีตัวหนังสือจีน จะติดตั้งที่ไร ใจสั่นทุกที

![](/img/download-mx-component.png)

เเล้วทำการ extract file mx-component เเล้วไปที่ root/EnvMEL เเล้วกด setup.exe ติดตั้งจนเสร็จ ต่อไป

![](/img/install-01.png)

กลับมาที่ root folder เเล้วกด setup.exe ที่ root folder

![](/img/install-02.png)

กรอกข้อมูลเเละทำการติดตั้งจนเสร็จ key in the image below

![](/img/screenshot-2021-04-01-174118.png)

สดท้าย dll files จะเก็บไว้ ตามรูป เราสามารถไปใช้ร่วมกับโปรเเกรมของเราได้เเล้วครับ

![](/img/dll-files.png)

### PLC บางคนบอกว่าง่าย บางคนบอกว่ายาก เเต่บองคนบอกว่า "ถ้าผมสอนให้คุณทำ คุณก็จะทำได้ตามผมสอน เเต่ถ้าผมสอนคุณดู Manual คุณจะทำได้ทุกอย่างที่ Manual บอกคุณ"