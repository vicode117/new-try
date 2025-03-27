import { useEffect, useState } from 'react'
import Todo from './components/Todo'
import './App.css'
import './components/Todo.css'

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 检测是否为移动设备
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // 初始检测
    checkIfMobile();

    // 监听窗口大小变化
    window.addEventListener('resize', checkIfMobile);

    // 清理监听器
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className={`app ${isMobile ? 'mobile' : ''}`}>
      <Todo />
    </div>
  )
}

export default App
