import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDevice } from '../contexts/DeviceContext';
import ZoomableIslandMap from '../components/ZoomableIslandMap';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    135deg, 
    #87CEEB 0%,
    #98E4D6 20%,
    #F4E285 40%,
    #FFB347 60%,
    #FF8C69 80%,
    #FFA07A 100%
  );
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #5d4037;
  margin-bottom: 20px;
  text-align: center;
`;

const DeviceInfo = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const InfoText = styled.p`
  margin: 5px 0;
  color: #333;
  font-size: 14px;
`;

const MobileTestPage: React.FC = () => {
  const { deviceInfo, isMobile, isTablet, isDesktop } = useDevice();

  // 测试用的地图图标
  const testIcons = [
    {
      x: 30,
      y: 30,
      title: '测试点1',
      iconType: 'emoji' as const,
      emoji: '🏠',
      size: 30
    },
    {
      x: 70,
      y: 50,
      title: '测试点2',
      iconType: 'emoji' as const,
      emoji: '🌊',
      size: 35
    },
    {
      x: 50,
      y: 70,
      title: '测试点3',
      iconType: 'emoji' as const,
      emoji: '⛰️',
      size: 32
    }
  ];

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>移动端地图测试</Title>
        
        <DeviceInfo>
          <InfoText><strong>设备类型:</strong> {isMobile ? '移动端' : isTablet ? '平板' : '桌面端'}</InfoText>
          <InfoText><strong>屏幕尺寸:</strong> {deviceInfo.screenWidth} × {deviceInfo.screenHeight}</InfoText>
          <InfoText><strong>支持触摸:</strong> {deviceInfo.hasTouch ? '是' : '否'}</InfoText>
          <InfoText><strong>屏幕方向:</strong> {deviceInfo.orientation === 'portrait' ? '竖屏' : '横屏'}</InfoText>
          <InfoText><strong>像素比:</strong> {deviceInfo.pixelRatio}</InfoText>
        </DeviceInfo>
      </motion.div>

      <ZoomableIslandMap
        mapImage="images/webps/男木岛/男木岛地图-线路版.webp"
        mapAlt="测试地图"
        mapScale={0.8}
        checkInIcons={testIcons}
        onIconClick={(icon) => {
          alert(`点击了: ${icon.title}`);
        }}
        onIconHover={(icon, event) => {
          console.log('悬停:', icon.title);
        }}
        onIconLeave={() => {
          console.log('离开图标');
        }}
        enableZoom={true}
        enablePan={true}
        minScale={0.5}
        maxScale={4}
        initialScale={1}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ 
          background: 'rgba(255, 255, 255, 0.9)', 
          borderRadius: '15px', 
          padding: '20px', 
          marginTop: '20px',
          textAlign: 'center'
        }}
      >
        <h3 style={{ color: '#5d4037', marginBottom: '15px' }}>使用说明</h3>
        <InfoText><strong>移动端:</strong> 双指缩放、单指拖拽、点击图标</InfoText>
        <InfoText><strong>桌面端:</strong> 鼠标滚轮缩放、拖拽、点击图标</InfoText>
        <InfoText><strong>缩放控制:</strong> 右下角的 +、-、⌂ 按钮</InfoText>
      </motion.div>
    </Container>
  );
};

export default MobileTestPage;