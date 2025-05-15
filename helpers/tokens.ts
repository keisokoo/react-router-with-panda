import { type ColorToken } from "../styled-system/tokens";

// 테마의 중첩된 객체 키 경로를 추출하는 타입
type TokenPath<T> = T extends object
  ? {
      [K in keyof T]: `${string & K}${TokenPath<T[K]> extends never
        ? ""
        : `.${TokenPath<T[K]>}`}`;
    }[keyof T]
  : never;

// 색상 토큰 경로 타입
export type ColorTokenPath = TokenPath<ColorToken>;

// 타입 안전한 토큰 참조 함수
export const colorToken = (path: ColorTokenPath) => `{${path}}`;
