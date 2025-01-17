export const languages = {
  en: 'English',
  ko: '한국어',
} as const;

export type Language = keyof typeof languages;

export const defaultLang = 'ko';

export const ui = {
  en: {
    '404.desc': 'Cannot find the related document.',
    'nav.title': 'My Space',
    'nav.writing': 'Writing',
    'nav.writing.desc': 'A space for storing insights',
    'nav.note': 'Note',
    'nav.note.desc': 'A space for recording useful knowledge',
    'nav.craft': 'Craft',
    'nav.craft.desc': 'A space for creating something interesting',
    'footer.time': '2023-PRESENT',
    'footer.source': 'Source Code',
    'index.name': 'Seolhwa',
    'index.desc':
      `<p>Passionate about practicing <b>self-development with altruism</b> and <b>transforming the knowledge of the world</b> into something I can make my own.</p>` +
      `<p>Clarifying thoughts and drawing out unconscious potential through consistent recording is the aim.</p>`,
    'index.currentWork': `<p>
        Currently work in 
        <b>
          <a class="external-link" href="https://www.happyedutech.com/" target="_blank"
            >Happyedutech</a
          >
        </b>
        developing
        <b>
          <a class="external-link" href="https://play.google.com/store/apps/details?id=kr.mathtutor&hl=ko" target="_blank"
            >MathTutor</a
          >
        </b>.
      </p>`,
    'snowfall.title': 'Snowfall Customizer',
    'snowfall.description': 'Customize the snowfall effect.',
    'snowfall.color': 'Color',
    'snowfall.min': 'Min',
    'snowfall.max': 'Max',
    'snowfall.snowflakeCount': 'Snowflake Count',
    'snowfall.speed': 'Speed',
    'snowfall.wind': 'Wind',
    'snowfall.radius': 'Radius',
    'snowfall.mode': 'Mode',
    'snowfall.on': 'On',
    'snowfall.off': 'Off',
  },
  ko: {
    '404.desc': '관련된 문서를 찾을 수 없습니다.',
    'nav.title': '나의 공간',
    'nav.writing': '서재',
    'nav.writing.desc': '인사이트를 보관하는 공간',
    'nav.note': '수첩',
    'nav.note.desc': '유용한 지식을 기록하는 공간',
    'nav.craft': '공방',
    'nav.craft.desc': '무언가 흥미로운 것을 만드는 공간',
    'footer.time': '2023-현재',
    'footer.source': '소스코드',
    'index.name': '설화',
    'index.desc':
      `<p><b>이타성의 자기계발</b>을 실천하는 것, <b>세상의 지식</b>을 내 것으로 만드는 것에 열광합니다.</p>` +
      `<p>생각을 명확히 하고 무의식 속 잠재력을 끌어내기 위해 틈틈이 기록하려 합니다.</p>`,
    'index.currentWork': `      <p>
        현재
        <b>
          <a class="external-link" href="https://www.happyedutech.com/" target="_blank"
            >해피에듀테크</a
          >
        </b>에서
        <b>
          <a class="external-link" href="https://play.google.com/store/apps/details?id=kr.mathtutor&hl=ko" target="_blank"
            >매쓰튜터</a
          >
        </b>를 개발하고 있습니다.
      </p>`,
    'snowfall.title': '눈 내림 효과 설정',
    'snowfall.description': '눈 내림 효과를 설정하세요.',
    'snowfall.color': '색상',
    'snowfall.min': '최소',
    'snowfall.max': '최대',
    'snowfall.snowflakeCount': '개수',
    'snowfall.speed': '속도',
    'snowfall.wind': '바람',
    'snowfall.radius': '크기',
    'snowfall.mode': '모드',
    'snowfall.on': '켜기',
    'snowfall.off': '끄기',
  },
} satisfies Record<Language, { [key: string]: string }>;
