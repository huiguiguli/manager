import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/manager/' // 关键！填 Gitee 项目的名称（小写，与仓库名一致）
})
