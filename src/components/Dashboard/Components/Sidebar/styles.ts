import styled from 'styled-components';

export const SidebarDashboard = styled.aside`
  background-color: #25294c;
  width: 15.625rem;
  height: 100vh;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1rem 1rem 1rem;
    svg {
      font-size: 1.5rem;
      color: #fff;
    }
  }

  nav {
    ul {
      padding: 0 1rem 1rem 1rem;
      display: flex;
      flex-direction: column;
      position: relative;
      li {
        list-style: none;
        background-color: #e9ecef;
        margin-bottom: 1rem;
        padding: 0.625rem;
        border-radius: 0.625rem;
        a {
          text-decoration: none;
          color: #202342;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          svg {
            font-size: 1.5rem;
          }
          span {
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
          }
        }
      }
      /* .profile-content {
        position: absolute;
        color: #fff;
        bottom: 0;
        left: -5px;
        width: 100%;
        .profile {
          position: relative;
          padding: 10px 10px;
          height: 60px;
          background-color: #1d1b31;
          .profile-details {
            display: flex;
            align-items: center;
            img {
              height: 45px;
              width: 45px;
              object-fit: cover;
              border-radius: 12px;
            }
            .name_job {
              margin-left: 10px;
              .name {
                font-size: 15px;
                font-weight: 400;
              }
              .job {
                font-size: 12px;
              }
            }
          }
          svg {
            position: absolute;
            left: 80%;
            bottom: 18px;
            transform: translateX(-50%);
            font-size: 20px;
            border-radius: 12px;
          }
        }
      } */
    }
  }
`;
