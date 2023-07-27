import React, { useEffect, useState } from 'react'
import Header from './layout/Header'
import Aside from './layout/Aside'
import Footer from './layout/Footer'
import { Outlet } from 'react-router-dom'
import { loadLink, loadScripts } from '../../util/helper'

export default function LayoutAdmin() {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    if (isMount) {
      document.body.className = 'hold-transition skin-blue sidebar-mini';
      // Load CSS
      let links = loadLink([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/font-awesome/css/font-awesome.min.css',
        'bower_components/Ionicons/css/ionicons.min.css',
        'dist/css/AdminLTE.min.css',
        'dist/css/skins/_all-skins.min.css',
      ]);
      // Load file scripts của layout client
      let scripts = loadScripts([
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
        'bower_components/fastclick/lib/fastclick.js',
        'dist/js/adminlte.min.js',
        'dist/js/demo.js',
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
    <div className='wrapper'>
      <Header />
      <Aside />
      <Outlet />
      <Footer />
    </div>
  )
}
