import { useEffect, useRef } from 'react'
import Script from 'next/script'

interface HumanModelProps {
  onRotationChange: (rotation: number) => void;
  onZoomChange: (zoom: number) => void;
}

export default function HumanModel({ onRotationChange, onZoomChange }: HumanModelProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const loadModel = () => {
      if (iframeRef.current) {
        const uid = '49459c213eb149ddbbc12ed5649ac1b0' // Anatomy Study 2009 model UID
        const client = new window.Sketchfab('1.12.1', iframeRef.current)

        client.init(uid, {
          success: (api: any) => {
            api.start()
            api.addEventListener('viewerready', () => {
              console.log('Viewer is ready')
              
              // Track camera rotation and zoom
              api.addEventListener('camerachange', () => {
                api.getCameraLookAt((err: any, camera: any) => {
                  if (!err) {
                    const rotation = Math.atan2(camera.target[0] - camera.position[0], camera.target[2] - camera.position[2]) * (180 / Math.PI)
                    onRotationChange(Math.abs(rotation))

                    const distance = Math.sqrt(
                      Math.pow(camera.position[0] - camera.target[0], 2) +
                      Math.pow(camera.position[1] - camera.target[1], 2) +
                      Math.pow(camera.position[2] - camera.target[2], 2)
                    )
                    const zoomPercentage = 100 - (distance / 5) * 100 // Adjust the divisor as needed
                    onZoomChange(Math.max(0, Math.min(100, zoomPercentage)))
                  }
                })
              })
            })
          },
          error: () => {
            console.error('Sketchfab API error')
          },
          autostart: 1,
          preload: 1,
          ui_theme: 'dark',
          ui_annotations: 0,
          ui_controls: 1,
          ui_stop: 0,
        })
      }
    }

    if (window.Sketchfab) {
      loadModel()
    } else {
      const script = document.createElement('script')
      script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js'
      script.async = true
      script.onload = loadModel
      document.body.appendChild(script)
    }
  }, [onRotationChange, onZoomChange])

  return (
    <iframe
      ref={iframeRef}
      title="Anatomy Study 2009"
      className="w-full h-full"
      allow="autoplay; fullscreen; xr-spatial-tracking"
      allowFullScreen
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
    ></iframe>
  )
}

