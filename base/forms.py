from django import forms
from django.contrib.auth.forms import PasswordResetForm
from django.contrib.auth.forms import SetPasswordForm


class SignupForm(forms.Form):
    name = forms.CharField(
        widget=forms.TextInput()
    )
    email = forms.EmailField(
        widget=forms.TextInput()
    )

    password = forms.CharField(
        widget=forms.PasswordInput, required=True, initial="password"
    )

    def __init__(self, *args, **kwargs):
        super(SignupForm, self).__init__(*args, **kwargs)
        for field in self.fields.values():
            field.widget.attrs['class'] = 'form-control'
            field.widget.attrs['autofocus'] = 'autofocus'
            field.required = True


class LoginForm(forms.Form):
    email = forms.EmailField(
        widget=forms.TextInput()
    )

    password = forms.CharField(
        widget=forms.PasswordInput, required=True, initial="password"
    )

    def __init__(self, *args, **kwargs):
        super(LoginForm, self).__init__(*args, **kwargs)
        for field in self.fields.values():
            field.widget.attrs['class'] = 'form-control'
            field.widget.attrs['autofocus'] = 'autofocus'
            field.required = True


class ResetPasswordForm(PasswordResetForm):
    email = forms.EmailField(
        widget=forms.TextInput(
            attrs={
                "class": "form-control",
                "autofocus": "autofocus",
            }
        ), required=True
    )


class PasswordSetForm(SetPasswordForm):
    def __init__(self, *args, **kwargs):
        super(PasswordSetForm, self).__init__(*args, **kwargs)
        for field in self.fields.values():
            field.widget.attrs['class'] = 'form-control'
            field.widget.attrs['autofocus'] = 'autofocus'
            field.required = True