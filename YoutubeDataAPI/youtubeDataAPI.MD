# youtube Data API
youtube data api를 사용해서 video file을 youtube 채널로 upload

### 1. service app 생성
youtube data API를 사용하기 위해서는 GCP(Google Cloud Platform)를 사용해야한다.
1. project 생성
2. API Library에서 youtube data api를 활성화
3. credentials의 oauth2 Client ID 생성(유저 개인이 영상을 자신의 유튜브 스튜디오에 업로드 할 수 있도록 하기 위함)
- clientId, clientSecret은 accesstoken, refreshtoken 발급을 위해 사용됨
- redirectUris는 oauth2의 인가코드를 받기위한 url로 사용됨(oauth2에 대한 이해 필요)
- api key는 api에 접근하기 위해 사용되지만, user 개인 인증은 불가능
- oauth 2.0 프로토콜은 외부의 서비스에서도 인증을 가능케해, api를 유저 개인 인증을 이용해 가능하게 한다.
- serviceAccount는 구글에서 유저 정보가 필요 없지만, 유저의 authentication은 필요한 특수한 경우에 사용된다. 서버와 서버간 통신도 같은 예이다.
4. Oauth2 consent screen에서 유저 동의 정보 생성
- 유저에게 표시될 app의 정보를 설정한다.
- 유효하지 않은 정보들을 입력하지 않으면 app을 publish하는데 문제가 생긴다.
- 개발환경에서는 user type을 internal로 생성하고, 개발완료 후 production으로 전환해야한다.
(app을 publish하기 위해서는, youtube에서 정해진 rule을 충족해야한다. 밑에서 설명하겠다.)
5. 결제가 필요하다면 billing account를 생성하고, 실제 account와 연결해야한다.


### 2. how to publish
1. youtube data api는 develop 또는 testing 환경에서 upload할 수 있는 영상의 갯수를 제한한다.
2. youtube data api는 testing 환경에서는 설정한 유저만 service에 접근할 수 있다.
3. publish하기 위해서는, app의 상태를 publish로 설정하고, youtube에 publish 요청 및 quota 상한 요청을 요구해야한다.

### 2. resumable upload
youtube 등 대부분의 영상 플랫폼에서는 resumable upload를 제공한다. resumable upload를 사용하면, network상의 오류로 인해 전송이 중단되더라도 다시 재개 가능하다.
파일이 크거나, 네트워크가 불안정한 상황에서는 추천된다. 현대 서비스에서 video파일의 해상도는 높아지고있고(대부분의 영상리소스 회사가 양질의 영상을 제공하고, 저화질의 영상을 deprecated 시키는 추세이다.), 이에 따라 영상의 용량은 대부분 커지고 있다.
또한 와이파이를 사용하는 휴대용 기기나, 낮은 대역폭을 사용하는 기기는 네트워크의 안정성이 낮으므로, resumable upload가 필수라고 생각이 된다.


### 3. reference
https://developers.google.com/youtube/v3/guides/uploading_a_video
https://developers.google.com/youtube/v3/guides/using_resumable_upload_protocol