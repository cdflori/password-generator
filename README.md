# password-generator

In this assignment we were tasked to create a password generator. The user will be prompted a series of questions that determine the password length and what characters are needed. After the user makes their character selections, they will receive a random password that reflects their previous selections. 

## Steps

    1. Choose Password Length
        When the user clicks "Generate Password" they will receive their first prompt, asking: "How many characters would you like your password to contain (between 8 - 128)?"

            - The user will enter a numerical value between 8-128, then click "okay" to continue. 
            - If the user inputs a numerical value less than 8, they will be prompted with the message, "You need more characters! Choose between 8 and 128 characters"

        Once the user selects a valid numerical value for character length, they will be shown their next prompted question.

        Image Snippet: 

        ![Password Length Prompt](/Develop/assets/images/charlength.png)

        Code: 
        let password = "";
        
        let passwordLength = parseInt(prompt("How many characters would you like your password to contain (between 8 - 128)?"));
        if (passwordLength > 128 || passwordLength < 8) {
            passwordLength = parseInt(prompt("You need more characters! Choose between 8 and 128 characters"));
        }

    2. Upper Case Letters
        The second question the user will be prompted with is, "Should your password contain upper case letters?"

            - The user will either confirm (Okay) or not confirm (cancel) to make their selection.

        Once the user selects their choice regarding upper case letters, they will be shown their next prompted question.

        Image Snippet:
        ![Upper Case Letter Prompt] (/assets/images/uppercase.png)

        Code:
        const confirmUpperChar = confirm("Should your password contain upper case letters?");

        if (confirmUpperChar === true) {
            possiblePassword = possiblePassword.concat(alphaUpper);
        }

    3. Lower Case Letters
        The third question the user will be prompted with is, "Should your password contain lower case letters?"

            - The user will either confirm (Okay) or not confirm (cancel) to make their selection.

        Once the user selects their choice regarding lower case letters, they will be shown their next prompted question.

        Image Snippet:
        ![Lower Case Letter Prompt] (/assets/images/lowercase.png)

        Code:
        const confirmLowerChar = confirm("Should your password contain lower case letters?");

        if (confirmLowerChar === true) {
            possiblePassword = possiblePassword.concat(alphaLower);
        }

    4. Numbers
        The fourth question the user will be prompted with is, "Should your password contain numbers?"

            - The user will either confirm (Okay) or not confirm (cancel) to make their selection.

        Once the user selects their choice regarding numbers, they will be shown their next prompted question.

        Image Snippet:

        ![Number Prompt] (/assets/images/numbers.png)

        Code:
        const confirmNumber = confirm("Should your password contain numbers?");

        if (confirmNumber === true) {
            possiblePassword = possiblePassword.concat(number);
        }

    5. Special Characters
        The final question the user will be prompted with is, "Should your password contain special characters?"

            - The user will either confirm (Okay) or not confirm (cancel) to make their selection.

        Once the user selects their choice regarding special characters their password will appear in the "Your Secure Password Field"

        Image Snippet:

        ![Special Character Prompt] (/assets/images/specialchar.png)


        Code:
        const confirmSpecialChar = confirm("Should your password contain special characters?");

        if (confirmSpecialChar === true) {
            possiblePassword = possiblePassword.concat(specialChar);
        }

    ***The password generator will always ask each of these five questions above. The password generated will always be random and include the user's selections. 

    ![Generated Password] (/assets/images/generatedpass.png)

    ***The password will be reset if the user refreshes the page or clicks "generate password" again. 

    

## Full Code

https://github.com/cdflori/password-generator 

## Deployed Generator





