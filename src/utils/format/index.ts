import dayjs from 'dayjs'
export function checkTimeStrMatchFormat(
  timeStr: string,
  format: string = 'YYYY-MM-DD'
): boolean {
  // 边界：非字符串/空字符串直接返回false
  if (typeof timeStr !== 'string' || !timeStr.trim()) return false
  // 核心：dayjs原生严格解析 + 有效性判断
  return dayjs(timeStr, format, true).isValid()
}

