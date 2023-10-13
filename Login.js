import React from 'react'
export default function login()
{
    return(
        <div>
            <center>
            <form method="" action="" name="login_form" onsubmit="return validate()">
        <h2>Login Page</h2>
        <table>
            <tr>
                <td><label>UserName: </label></td>
                <td>
                    <input type="text" name="uname" placeholder="UserName"/>
                </td>
            </tr><br></br>
            <tr>
                <td><label>Password: </label></td>
                <td>
                    <input type="password" name="password" placeholder="Password"/>
                </td>
            </tr><br></br>
            <tr>
                <td colspan="2" align="center">
                    <input type="submit" name="submit" value="Submit"/>
                </td>
            </tr><br></br>
        </table>
    </form>
    </center>
        </div>
    )
}