import React from 'react'
import { useEffect, useState } from 'react'
import { loadScripts, loadLink } from '../util/helper'
import { Outlet } from 'react-router-dom'
import Header from './layout/Header';
import Footer from './layout/Footer';

export default function LayoutClient() {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    if (isMount) {
      // Load CSS
      let links = loadLink(['style.css']);
      // Load file scripts của layout client
      let scripts = loadScripts([
        'js/vendor/modernizr-2.8.3.min.js',
        'js/vendor/jquery-1.11.3.min.js',
        'js/bootstrap.min.js',
        'js/owl.carousel.min.js',
        'js/jquery.nivo.slider.pack.js',
        'js/jquery.fancybox.js',
        'js/jquery.scrollUp.min.js',
        'js/wow.js',
        'js/jquery.meanmenu.js',
        'js/plugins.js',
        'js/main.js',
      ]);
      return () => {
        // Xóa file scripts khi không dùng layout client nữa
        for (let src of scripts) {
          src.remove();
        }
        // Xóa CSS
        for (let link of links) {
          link.remove();
        }
      }
    } else {
      setIsMount(true);
    }
  }, [isMount])
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
