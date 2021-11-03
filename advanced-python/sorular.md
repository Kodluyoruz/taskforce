# Regular Expressions

Hangi regex sadece bir boşluk karakteri ile eşleşir?
- \S
- \s (doğru)
- .
- _
- \\.

# Regular Expressions: Veri Eşleştirme ve Çıkarma

Aşağıdaki programın çıktısı nedir?
```python
import re
s = 'A message from csev@umich.edu to cwen@iupui.edu about meeting @2PM'
lst = re.findall('\\S+@\\S+', s)
print(lst)
```
- ['csev@umich.edu', 'cwen@iupui.edu'] (doğru)
- ['csev@umich.edu']
- ['umich.edu', 'iupui.edu']
- ['csev@', 'cwen@']

# Regular Expressions: Pratik Uygulamalar

Hangisi bir regular expression'da "$" işaretini arar?
- $
- \dollar\
- \\$ (doğru)
- !$