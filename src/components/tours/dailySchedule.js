import React, { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import styles from "../../css/day.module.css"

const DailySchedule = props => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <article className={styles.day}>
      <h4>
        {props.item.day}
        <button
          className={styles.btn}
          onClick={() => setShowInfo(showInfo => !showInfo)}
        >
          {!showInfo ? <FaAngleDown /> : <FaAngleUp />}
        </button>
      </h4>
      {showInfo && <p>{props.item.info}</p>}
    </article>
  )
}

export default DailySchedule
