## replace
대상 문자열에 old value를 newvalue로 replace

### parameter
string.(oldvalue, newvalue, count)

-oldvalue : required, 문자열 내 바꿔야할 value
-newvalue : required, 바뀔 newvalue
-count : 문자열 내 앞에서 부터 replace를 실행 할 count

### 사용법

### list 사용법
<pre>
<code>
list1 = ["1", "1", "3", "3"]
list2 = []

for num in list1:
    changed_num = num.replace("1", "2")
    list2.append(changed_num)

print(list2)
</code>
</pre>
['2', '2', '3', '3']





