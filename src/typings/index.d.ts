type Id = string | number;

declare namespace Global {
  type LanguageType = 'ZH' | 'EN';
  /** 系统设置 */
  interface AppSettings {
    /** 系统标题 */
    title: string
    /** 主题颜色 */
    themeColor: string
    /** 语言( zh-cn| en) */
    language: LanguageType
    /** 组件尺寸 */
    size: EpPropMergeType
    /** 宽度低于多少认定移动端 */
    sidebarMoblieWidth: number
    /** 是否显示 tagsView */
    tagsView: boolean
  }
}
