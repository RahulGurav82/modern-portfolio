import React from 'react'
import { MdOutlineArrowDownward } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";


const ButtonPrimary = ({href, target='_self', label, icon, classes}) => {
  if (href) {
    return (
        <a 
        href={href}
        target={target}
        className={"btn btn-primary reveal-up " + classes}
        >
            {label}

            {icon ? 
            <span className='material-sysmbols-rounded ' aria-hidden="true"><MdOutlineFileDownload /></span>
            : undefined
            }
        </a>
    )
  } else {
    return (
        <button className={'btn btn-primary ' + classes}>
            {label}

            {icon ? 
            <span className='material-symbols-rounded' aria-hidden="true"><MdOutlineFileDownload /></span>
            : undefined
            }
        </button>
    )
  }
}

const ButtonOutLine = ({href, target='_self', label, icon, classes}) => {
    if (href) {
      return (
          <a 
          href={href}
          target={target}
          className={"btn btn-outline " + classes}
          >
              {label}
  
              {icon ? 
              <span className='material-sysmbols-rounded ' aria-hidden="true"><MdOutlineArrowDownward /></span>
              : undefined
              }
          </a>
      )
    } else {
      return (
          <button className={'btn btn-outline ' + classes}>
              {label}
  
              {icon ? 
              <span className='material-symbols-rounded' aria-hidden="true"><MdOutlineArrowDownward /></span>
              : undefined
              }
          </button>
      )
    }
  }

export { ButtonPrimary, ButtonOutLine }
