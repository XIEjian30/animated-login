import { useState } from 'react';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#0f0f23',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          🎉 Animated Login Test
        </h1>
        <p style={{ fontSize: '1.2rem' }}>
          如果你看到这个页面，说明构建成功了！
        </p>
        <button 
          onClick={() => alert('登录动画组件加载测试成功！')}
          style={{
            marginTop: '20px',
            padding: '12px 30px',
            fontSize: '1.1rem',
            background: '#6366f1',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          点击测试
        </button>
      </div>
    </div>
  );
}

export default App;