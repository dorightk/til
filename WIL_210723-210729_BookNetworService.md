# 회고
## 실전 프로젝트
실전 프로젝트가 시작되었다.
1. 백엔드3명 프론트엔드3명 디자이너 3명으로 구성된 팀원이 구성되었다.
2. 기획회의를 통해 프로젝트의 주제를 정했다. 주제는 사용자들의 독서 경험을 기반으로한 networking serive(BNS)이다.
    - 기획회의가 정말 어려움을 느꼈다
    - 기획회의 단계에서 큰 얼개를 확정해야 추후에 추가적인 회의나 재설계가 이루어지지 않음을 느꼈다.
    - 이번 프로젝트를 경험하며, 앞으로 기획단계에서 어떤 것을 확정지어야 하는지 기록할 예정이다.
3. gitflow를 사용 할 수 있다.
    - 같은 조원분이 자세하게 설명해주셔서 git을 통한 협업과 gitflow관리를 효과적으로 사용하게 되었다.
    - pullrequest, rebase, branch생성과 삭제, feature, hotfix, update로 branch 나누어 관리
    <img alt="아름답다" src="https://user-images.githubusercontent.com/77604219/127768111-81f8019d-a80b-4ab4-aa31-3a9e8c5386e5.png" width="700">
    
4. swagger를 실제 협업에 사용했다
    - 지금까지 구글공유페이지를 사용했지만, 이번 프로젝트부터 프론트와 소통하기 위한 툴로 swagger를 사용헀다.
    <img alt="api가 바뀔때마다 매번 수정해주어야 한다.." src="https://user-images.githubusercontent.com/77604219/127768350-aaa5d687-748a-483d-957a-05b52c3fdc26.png" width="700">
5. 네이버 검색 api를 프로젝트에 적용했다.
    - 네이버 책 검색 api를 적용했다.
    - Object.entries()를 처음 사용했다.
6. puppeteer 라이브러리를 활용해 베스트셀러를 크롤링했다.
    - css의 selector를 이용했다.
    - 서버에서 크롬페이지가 열리지 않아 트러블슈팅, 원인은 sandbox 환경이 구축되지않아서였고, 다음코드를 추가했다.
```
args: ['--no-sandbox', '--disable-setuid-sandbox']
```
7. JSDoc 사용 시작
    - 주석처리를 위해 사용하고있다. 손에 익으려면 시간이 걸릴것 같다.
