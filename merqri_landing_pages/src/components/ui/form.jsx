import * as React from "react"
import PropTypes from "prop-types"
import { Controller, FormProvider, useFormContext } from "react-hook-form"
import { cn } from "../../lib/utils"

const Form = FormProvider
const FormField = ({ name, ...props }) => {
  const { control } = useFormContext()
  return <Controller name={name} control={control} {...props} />
}

FormField.propTypes = {
  name: PropTypes.string.isRequired,
}


const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("space-y-2", className)} {...props} />
})
FormItem.displayName = "FormItem"

FormItem.propTypes = {
  className: PropTypes.string,
}

const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

FormLabel.propTypes = {
  className: PropTypes.string,
}

const FormControl = React.forwardRef(({ ...props }, ref) => {
  return <div ref={ref} className="mt-2" {...props} />
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  return <p ref={ref} className={cn("text-sm text-[#363E51]", className)} {...props} />
})
FormDescription.displayName = "FormDescription"

FormDescription.propTypes = {
  className: PropTypes.string,
}

const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <p ref={ref} className={cn("text-sm font-medium text-[#FF0000]", className)} {...props}>
      {children}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

FormMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField }
