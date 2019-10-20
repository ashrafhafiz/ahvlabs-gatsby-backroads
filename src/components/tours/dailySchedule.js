import React, { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"
import styles from "../../css/day.module.css"

const DailySchedule = props => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <article className={styles.day}>
      <h4 style={{ background: "lightgray", padding: "0.5rem 1rem" }}>
        {props.item.day}
        <button
          className={styles.btn}
          onClick={() => setShowInfo(showInfo => !showInfo)}
        >
          {!showInfo ? <FaPlus /> : <FaMinus />}
        </button>
      </h4>
      {showInfo && <p>{props.item.info}</p>}
    </article>
  )
}

export default DailySchedule
