# 한국어 번역 유지관리

이 포크는 Dwains Dashboard Next의 UI를 한국어로 표시합니다.

- 번역 원본: `src/i18n/locales/en.ts`
- 한국어 사전: `src/i18n/locales/ko.ts`
- 언어 등록 및 지연 로딩: `src/i18n/index.ts`
- 실제 Home Assistant에서 한국어 우선 선택: `src/utils/localize.ts`
- 앱 내 직접 표기 문구: `src/index.ts`

## 용어 표준

| 영어 | 한국어 |
| --- | --- |
| Area, Room | 방 |
| Device | 기기 |
| Entity | 엔티티 |
| Climate | 난방 |
| Humidifier | 가습기 |
| Home | 홈 |
| Favorites | 즐겨찾기 |
| Blueprint | 블루프린트 |

사용자가 Home Assistant 프로필 언어를 변경해도, 실제 HA 대시보드에서는 한국어 UI를 사용합니다.
다만 사용자 지정 카드와 Home Assistant 자체에서 출력하는 문구는 해당 카드 및 HA의 언어 설정을 따릅니다.

## 원본 업데이트 대응

1. upstream의 `en.ts`를 최신 상태로 합칩니다.
2. 새 키를 `ko.ts`에 번역하여 추가합니다. `{count}`, `{name}` 같은 자리표시자를 바꾸면 안 됩니다.
3. `npm ci && npm run i18n:check && npm run type-check && npm test && npm run build`로 검증합니다.
4. `.github/workflows/sync-dist.yml`이 `dist/` 변경사항을 자동 커밋합니다.
5. HACS에서 포크의 업데이트를 다운로드한 뒤 브라우저 캐시를 갱신합니다.

원본 텍스트 키와 번역 키의 수 및 자리표시자는 `npm run i18n:check`에서 검사합니다.
영어 원본에 새 키가 추가되면 이 검사가 실패하므로 한국어 번역을 누락하지 않을 수 있습니다.
