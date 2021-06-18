## append
list를 만들고 append 하는것은 요소에 list를 안씌우고, 하나의 리스트에 저장, 게다가 append라 for문밖에서도 동작


<pre>
<code>
import sys

n = int(sys.stdin.readline())
ps_list = []
for _ in range(n):
    ps = input()
    ps_list.append(ps)
print(ps_list)

</code>
</pre>

<pre>
<code>
['(())())', '(((()())()', '(()())((()))', '((()()(()))(((())))()', '()()()()(()()())()', '(()((())()(']
</code>
</pre>

## list
list 없이, 요소에 바로 list씌우기, 여러개의 list로 나오고, for문밖에서 동작 불가, list에 추가하면 이중list문 가능
<pre>
<code>
import sys

n = int(sys.stdin.readline())

for _ in range(n):
    ps = input()
    ps_list = list(ps)
    print(ps_list)
</code>
</pre>
<pre>
<code>
['(', '(', ')', ')', '(', ')', ')']
['(', '(', '(', '(', ')', '(', ')', ')', '(', ')']
['(', '(', ')', '(', ')', ')', '(', '(', '(', ')', ')', ')']
['(', '(', '(', ')', '(', ')', '(', '(', ')', ')', ')', '(', '(', '(', '(', ')', ')', ')', ')', '(', ')']
['(', ')', '(', ')', '(', ')', '(', ')', '(', '(', ')', '(', ')', '(', ')', ')', '(', ')']

</code>
</pre>

