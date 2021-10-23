---
templateKey: blog-post
title: Energy monitor
date: 2021-10-09T11:17:07.971Z
description: สำหรับโปรเจคนี้ ดังนั้น เมื่อต้องการใช้ software opensource
  ่grafana, influxDB อาจจะใช้ cloud service
  (จะมีค่าใช้จ่ายสำหรับการใช้งานระยะยาวหรือเกินอัตราการใช้งานฟรีของเเต่ละ
  service) or local server
  สำหรับกรณีที่ไม่ต้องการความยุ่งยากสำหรับเเสดงผลเป็นกราฟ โดย container
  จะมีส่วนช่วยให้ทำงานในส่วนเเสดงผลได้ง่ายมากขึ้น ในกรณีของผมเอง เป็นเเค่
  development ไม่ได้ใช้งานใน prodcution ผมจะใช้คอมพิวเตอร์ที่สามารถใช้ unix
  (xubuntu) เเล้วติดตั้ง docker เพื่อใช้งานสำหรับ container สำหรับเเสดงผล
---
<https://gitlab.com/rbtech1/iot_energy_monitor>