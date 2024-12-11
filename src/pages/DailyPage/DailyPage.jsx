
const DailyPage = () => {
  return (
    <main>
      {/* <!-- -------------------TG section---------------- --> */}

      <section class="section tg-section">
        <div class="container">
          <div class="tg-wrap">
            <div class="user-icon-wrap daily">
              <img src="../img/svg/user-icon.svg" alt="" />
            </div>
            <div class="tg-content">
              <div class="tg-text-wrap">
                <h2 class="tg-title">TG NAME</h2>
                <p class="tg-balance">??,??? WE</p>
              </div>
              <div class="tg-button-wrap">
                <button
                  type="button"
                  class="tg-button"
                  data-action="open-input"
                >
                  <svg width="9" height="9">
                    <use href="../img/svg/symbol-defs.svg#icon-down-arrow" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- -------------------WE Balance section---------------- --> */}
      <section class="section we-balance-section">
        <div class="container we-balance">
          <div class="we-balance-wrap">
            <h2>WE Balalnce:</h2>
            <div class="we-balance-value-wrap">
              <div class="we-balance-value-icon">
                <img
                  src="../img/tonkoin.png"
                  width="32"
                  height="32"
                  alt="tonkoin"
                />
              </div>
              <span class="we-balance-value">55,000</span>
              <button class="we-balance-value-button">History</button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- -------------------UPGRADE section---------------- --> */}
      <section class="section upgrade-section">
        <div class="container upgrade">
          <h3 class="up-heading">Upgrade</h3>
          <ul class="up-list">
            <li class="up-list-item" data-action="6,000">
              <h4 class="up-item-name">Daily Check</h4>
              <p class="up-item-value-wrap">
                <span class="up-item-value">-6,000</span>
                WE · Lvl
                <span class="up-item-lvl">3</span>
              </p>
            </li>
            <li class="up-list-item" data-action="6,300">
              <h4 class="up-item-name">Daily Check</h4>
              <p class="up-item-value-wrap">
                <span class="up-item-value">-6,300</span>
                WE · Lvl
                <span class="up-item-lvl">3</span>
              </p>
            </li>
            <li class="up-list-item">
              <h4 class="up-item-name">Daily Check</h4>
              <p class="up-item-value-wrap">
                <span class="up-item-value">-6,000</span>
                WE · Lvl
                <span class="up-item-lvl">3</span>
              </p>
            </li>
            <li class="up-list-item">
              <h4 class="up-item-name">Daily Check</h4>
              <p class="up-item-value-wrap">
                <span class="up-item-value">-6,000</span>
                WE · Lvl
                <span class="up-item-lvl">3</span>
              </p>
            </li>
            <li class="up-list-item">
              <h4 class="up-item-name">Daily Check</h4>
              <p class="up-item-value-wrap">
                <span class="up-item-value">-6,000</span>
                WE · Lvl
                <span class="up-item-lvl">3</span>
              </p>
            </li>
            <li class="up-list-item">
              <h4 class="up-item-name">Daily Check</h4>
              <p class="up-item-value-wrap">
                <span class="up-item-value">-6,000</span>
                WE · Lvl
                <span class="up-item-lvl">3</span>
              </p>
            </li>
            <li class="up-list-item">
              <h4 class="up-item-name">Daily Check</h4>
              <p class="up-item-value-wrap">
                <span class="up-item-value">-6,000</span>
                WE · Lvl
                <span class="up-item-lvl">3</span>
              </p>
            </li>
          </ul>
          <span class="up-item-notif">Upgraded</span>
        </div>
      </section>
      {/* <!-- -------------------TASKS section---------------- --> */}
      <section class="section tsk-section">
        <div class="container">
          <ul class="tsk-list">
            <li class="tsk-list-item" style="transition-delay: 0ms">
              <p class="tsk-item-name">Daily Check</p>
              <button class="tsk-item-btn">Claim</button>
            </li>
          </ul>
          <span class="tsk-item-notif">Claimed</span>
        </div>
      </section>
      {/* <!-- -------------------MENU---------------- --> */}
      <div class="menu">
        <h2 class="menu-heading">Settings</h2>
        <div class="menu-user-info-wrap">
          <div class="menu-user-icon-wrap">
            <img src="../img/svg/user-icon.svg" alt="" />
          </div>
          <div class="menu-user-content">
            <div class="menu-user-text-wrap">
              <h2 class="menu-user-title">#user_<span>id</span></h2>
              <p class="menu-user-balance">0.00 NEAR | 0.00 TON</p>
            </div>
          </div>
        </div>
        <ul class="menu-setting-list">
          <li class="menu-setting-item">
            <div class="menu-settings-item-icon-wrap">
              <img src="../img/svg/language.svg" alt="" />
            </div>
            <h3 class="menu-settings-item-heading">Language</h3>
            <button
              type="button"
              class="menu-settings-item-button"
              id="lng-btn"
            >
              <svg width="9" height="9">
                <use href="../img/svg/symbol-defs.svg#icon-down-arrow" />
              </svg>
            </button>
          </li>
          <li class="menu-setting-item">
            <div class="menu-settings-item-icon-wrap">
              <img src="../img/svg/inviter.svg" alt="" />
            </div>
            <h3 class="menu-settings-item-heading">Inviter</h3>
            <button
              type="button"
              class="menu-settings-item-button"
              id="inv-btn"
            >
              <svg width="9" height="9">
                <use href="../img/svg/symbol-defs.svg#icon-down-arrow" />
              </svg>
            </button>
          </li>
          <li class="menu-setting-item">
            <div class="menu-settings-item-icon-wrap">
              <img src="../img/svg/logout.svg" alt="" />
            </div>
            <h3 class="menu-settings-item-heading">Logout</h3>
            <a
              href="../../index.html"
              class="menu-settings-item-button"
              id="logout-btn"
            >
              <svg width="9" height="9">
                <use href="../img/svg/symbol-defs.svg#icon-down-arrow" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default DailyPage;
