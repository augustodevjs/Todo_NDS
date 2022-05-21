import styled from 'styled-components';

export const SidebarDashboard = styled.aside`
  background-color: #25294c;
  width: 15.625rem;
  height: 100vh;
  position: relative;

  .logo {
    display: flex;
    align-items: center;
    padding: 1.5rem 1rem 1rem 1rem;
    justify-content: space-between;
    svg {
      font-size: 1.5rem;
      color: #fff;
    }
  }

  nav {
    ul {
      padding: 0 1rem 1rem 1rem;
      li {
        list-style-type: none;
        background-color: transparent;

        padding: 0.875rem;
        border-radius: 0.625rem;
        a {
          text-decoration: none;
          color: #e9ecef;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          svg {
            font-size: 1.5rem;
          }
          span {
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
            margin-right: 0.25rem;
          }
          .number {
            font-size: 0.7rem;
            margin-bottom: 0;
            background-color: #202342;
            padding: 0 0.3125rem;
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
            border-radius: 1px;
            color: #fff;
          }
        }
      }
      .active {
        background: #fff;

        a {
          color: #202342;
        }
      }

      .none {
        .number {
          background: #fff;
          color: #202342;
        }
      }
    }
  }

  li:nth-child(3) {
    position: absolute;
    bottom: 0;
    left: 0;
    background: #202342;
    color: #fff;
    width: 100%;
    border-radius: 0;
    display: flex;
    align-items: center;
    gap: 2.4375rem;
    .user {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      svg {
        font-size: 1.875rem;
      }
      .user-info {
        display: flex;
        flex-direction: column;
        span {
          color: #fff;
          font-size: 1rem;
          font-family: 'Poppins', sans-serif;
        }
        div {
          color: #e9ecef;
          font-size: 0.75rem;
          font-family: 'Poppins', sans-serif;
        }
      }
    }
    span {
      svg {
        transform: rotate(180deg);
        font-size: 1.5rem;
      }
    }
  }
`;
