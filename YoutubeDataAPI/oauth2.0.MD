Oauth 2.0은 외부 서비스에서 필요한 서비스의 인증이 가능하도록 하는 프로토콜이다.

Oauth 2.0의 사용없이, api key만을 사용한다면 유저는 authentication을 통해 서비스 이용권한을 얻는다.
예를 들어 구글맵과 같은 서비스를 사용하는 api에서 사용 가능하도록 한다고 해보자. 우리는 GCP에서 project를 생성하고, api key를 생성해서, 클라이언트에서 해당 api key를 사용하도록 두면, 누구나 구글맵을 사용해서 지도를 볼수있다.
그러나 구글맵에 리뷰나 사진을 등록하려고하면, 해당 권한(authorization)을 얻어야한다. authorization을 얻기위해서는, 특정한 action이나 consent가 필요한다. 일반적으로 구글 로그인과 같은 로그인과 동의화면이 동반될 것이다.
이와 같이 authorization을 위해 사용되는 것이 oauth 프로토콜이다. 

구글맵과 같은 서비스를 로그인없이 이용할 수 있지만(임의로 지정된 apikey로 자동으로 authentication된다), 실제로 구글맵은 로그인을 하지 않아도, 서비스를 사용할 수 있다. 하지만, 구글맵에 리뷰를 남기는 등의 authorization이 필요한 서비스에는 oauth가 필요하다.
서비스에서 구글맵의 자원을 이용한다면 api key를 사용해도 무방하지만, 구글 서비스에 authrization이 필요하다면 oatuh2 client를 만들고, oauth2 protocol을 이용해야한다.

auth protocol에 대해서는 다음에 논의해보고자 한다.
